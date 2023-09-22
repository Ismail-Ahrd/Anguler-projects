import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit{
  @Input() listName : string =""
  @Output() deleteItem = new EventEmitter()
  @Output() updateItem = new EventEmitter()

  constructor(){}

  ngOnInit(): void {
      
  }

  handleDeleteItem(){
    this.deleteItem.emit()
  }

  handleUpdateItem(){
    this.updateItem.emit()
  }
}
