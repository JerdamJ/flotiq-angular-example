import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todolist } from 'flotiq';
import { FlotiqService } from 'src/app/services/flotiq.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-entries-list',
    templateUrl: './entries-list.component.html',
    styleUrls: ['./entries-list.component.css']
})
export class EntriesListComponent implements OnInit, OnDestroy {

    entries: Todolist[];
    entryChanged: Subscription;
    entryAdded: Subscription;
    entryRemoved: Subscription;


    constructor(
        private flotiqService: FlotiqService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

        this.flotiqService.listEntries().subscribe((entries) => {
            this.entries = entries.data;
        }, error => {});

        this.entryChanged = this.flotiqService.elementChanged.subscribe((response) => {
            const index = this.getIndex(response.id);
            this.entries[index] = response;
        });

        this.entryAdded =  this.flotiqService.elementAdded.subscribe((response) => {
            this.entries.push(response);
        });

        this.entryRemoved = this.flotiqService.elementRemoved.subscribe((id) => {
            const index = this.getIndex(id);
            this.entries.splice(index, 1);
        });

    }

    ngOnDestroy() {
        this.entryChanged.unsubscribe();
        this.entryAdded.unsubscribe();
        this.entryRemoved.unsubscribe();
    }

    newEntry() {
        this.router.navigate(['new'], {relativeTo: this.activatedRoute});
    }

    private getIndex(objectId: string): number {
        const index = this.entries.findIndex(entry => entry.id === objectId);
        return index;
    }

}
