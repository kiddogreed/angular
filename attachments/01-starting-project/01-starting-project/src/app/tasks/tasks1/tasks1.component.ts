import {type Task } from './tasks1.model';
import { Component, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tasks1',
  standalone: true,
  imports: [],
  templateUrl: './tasks1.component.html',
  styleUrl: './tasks1.component.css'
})
export class Tasks1Component {
@Input({required:true}) task: Task|undefined;
@Output() complete = new EventEmitter<string>();

onCompleteTask(){
  this.complete.emit(this.task?.id);
}
}
