import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text:string=""
  @Input() color:string=""
  @Input() textColor:string=""
  @Input() btnBorder:string=""
  @Input() btnBorderColor:string=""
  @Input() width:string="80px"
  @Output() btnClick= new EventEmitter()

  constructor() { }
  
  ngOnInit(): void {
      
  }

  onClick(){
    this.btnClick.emit()
  }
}
