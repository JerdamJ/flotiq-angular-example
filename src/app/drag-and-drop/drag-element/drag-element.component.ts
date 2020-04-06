import { Component, Input } from '@angular/core';
import { Todolist } from 'flotiq';
import { faCheckCircle, faClock, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drag-element',
  templateUrl: './drag-element.component.html',
  styleUrls: ['./drag-element.component.scss']
})
export class DragElementComponent {

  @Input() entry: Todolist;
  @Input() index: number;
  faCheckCircle = faCheckCircle;
  faClock = faClock;
  faQuestionCircle = faQuestionCircle;

  constructor() { }

}
