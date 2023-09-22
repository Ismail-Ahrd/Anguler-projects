import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Input() userName:string=""
  @Output() logout=new EventEmitter()

  constructor(){}

  ngOnInit(): void {
      
  }

  getProdects(){
    console.log("Prodects");
    
  }

  logOut(){
    this.logout.emit()
  }

  getCostumors() {
    console.log("Costumors");
  }

}
