import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{
  @Input() taskName : string=""
  @Output() deleteTask = new EventEmitter()
  @Output() updateTask = new EventEmitter()

  constructor(){}

  ngOnInit(): void {
      
  }

  handleDeleteTask(){
    this.deleteTask.emit()
  }

  handleUpdateTask(){
    this.updateTask.emit()
  }
}
