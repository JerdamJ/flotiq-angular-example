import { Component, Input } from '@angular/core';
import { Todolist } from 'flotiq';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss']
})
export class EntryComponent {

    @Input() entry: Todolist;
    @Input() index: number;

    injectClass() {
        const status = this.entry.status;
        return status === 'Done' ? 'status-completed' : status === 'In progress' ? 'status-pending' : 'status-new';
    }

}
