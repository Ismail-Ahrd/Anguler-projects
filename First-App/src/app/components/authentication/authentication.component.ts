import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  text:string=""
  password:string=""
  k:number=0
  
  constructor(private router:Router, private authService:AuthenticationService) {}
  
  ngOnInit(): void {
  }

  logIn(){
    this.authService.login(this.text,this.password)
  }


}
