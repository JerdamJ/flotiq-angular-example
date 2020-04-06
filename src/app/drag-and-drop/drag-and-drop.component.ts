import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Todolist } from 'flotiq';
import { Subscription } from 'rxjs';
import { FlotiqService } from '../services/flotiq.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-drag-and-drop',
    templateUrl: './drag-and-drop.component.html',
    styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit, OnDestroy {

    entries: Todolist[];
    private dndSubscription: Subscription;

    newEntries: Todolist[] = [];
    inProgressEntries: Todolist[] = [];
    doneEntries: Todolist[] = [];

    constructor(private flotiqApiService: FlotiqService) { }

    ngOnInit() {
        this.flotiqApiService.listEntries().subscribe((response) => {
            this.entries = response.data;
            this.redistributeValuesPerStatus(this.entries);
        }, error => {
            console.log('Error');
        });

    }

    ngOnDestroy() {
        if (this.dndSubscription) {
            this.dndSubscription.unsubscribe();
        }
    }

    drop(event: CdkDragDrop<Todolist[]>) {
        // console.log(event.container.data);
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
            const containerId = event.container.id;
            const status = containerId === 'doneList' ? 'Done' : containerId === 'inProgressList' ? 'In progress' : 'New';
            this.updateStatus(event.item.data, status);
        }
    }

    redistributeValuesPerStatus(entries: Todolist[]) {
        if (!entries.length) {
            console.log('No entries');
        }
        for (const entry of entries ) {
            switch (entry.status) {
                case 'Done':
                    this.doneEntries.push(entry);
                    break;
                case 'In progress':
                    this.inProgressEntries.push(entry);
                    break;
                default:
                    this.newEntries.push(entry);
            }
        }
    }

    updateStatus(item: Todolist, newStatus: string) {
        const newObject = {...item, status: newStatus};
        this.flotiqApiService.updateEntry(newObject, newObject.id).subscribe(response => {
            item.status = newStatus;
            console.log('Entry updated');
        }, error => {
            console.log('Errored: ' + error);
        });
    }
}
