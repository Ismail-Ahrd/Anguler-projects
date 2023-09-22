import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  authenticatedUser : User | undefined 
  constructor(private authService : AuthenticationService) { }

  ngOnInit(): void {
    this.authenticatedUser=this.authService.authenticatedUser      
  }
 
}
