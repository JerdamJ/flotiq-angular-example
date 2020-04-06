import { Injectable } from '@angular/core';
import { ContentToDoListService, Todolist } from 'flotiq';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class FlotiqService {

    elementAdded = new Subject<Todolist>();
    elementChanged = new Subject<Todolist>();
    elementRemoved = new Subject<string>();
    entries: Todolist[];

    constructor(private flotiqApiService: ContentToDoListService) {}

    // API CONNECTIONS

    addEntry(form: FormGroup) {
        return this.flotiqApiService.createtodolist(form.value);
    }

    listEntries() {
        return this.flotiqApiService.todolistList('1', '10', '', '', '1');
    }

    getEntry(id: string) {
        return this.flotiqApiService.gettodolist(id);
    }

    updateEntry(data: Todolist, id: string) {
        return this.flotiqApiService.updatetodolist(id, data);
    }

    deleteEntry(id) {
        return this.flotiqApiService.deletetodolist(id);
    }

}
