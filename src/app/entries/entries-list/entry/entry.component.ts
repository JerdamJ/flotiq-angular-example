import { Component, Input } from '@angular/core';
import { Todolist } from 'flotiq';
import { faCheckCircle, faClock, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss']
})
export class EntryComponent {

    @Input() entry: Todolist;
    @Input() index: number;
    faCheckCircle = faCheckCircle;
    faClock = faClock;
    faQuestionCircle = faQuestionCircle;

    injectClass() {
        const status = this.entry.status;
        return status === 'Done' ? 'status-completed' : status === 'In progress' ? 'status-pending' : 'status-new';
    }

}
