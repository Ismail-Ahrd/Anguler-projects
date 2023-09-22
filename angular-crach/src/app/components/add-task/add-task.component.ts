import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Task} from '../../Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task>=new EventEmitter()
  text:string=""
  day:string=""
  reminder:boolean=false
  showAddTask:boolean=false
  subsciption: Subscription = new Subscription()

  constructor(private uiService: UiService) {
    this.subsciption=this.uiService.onTggle().subscribe(value=>this.showAddTask=value)
   }

  ngOnInit(): void { }

  onSubmit() {
    if(!this.text){
      alert("please add a task")
    }
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text=""
    this.day=""
    this.reminder=false
  }

}
