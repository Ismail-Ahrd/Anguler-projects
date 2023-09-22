import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {product} from '../../Product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  isAdmin:boolean=true
  @Input() product:product={id:"",name:"",price:""}
  @Output() deleteBtn = new EventEmitter()
  @Output() updateBtn = new EventEmitter()

  isSelected:boolean=false
  state:string="Unselect"
  color:string="red"

  constructor(private authService:AuthenticationService){}

  ngOnInit(): void {
    this.authService.isAdmin.subscribe(isAdmin=>this.isAdmin=isAdmin)
  }

  onClick(){
    if(this.isSelected){
      this.isSelected=false
      this.state="Unselect"
      this.color="red"
    }else{
      this.isSelected=true
      this.state="Select"
      this.color="green"
    }
    
  }

  delete(){
    this.deleteBtn.emit(this.product.id)
  }

  update(){
    this.updateBtn.emit(this.product.id)
  }

}
