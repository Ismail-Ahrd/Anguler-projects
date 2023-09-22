import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{

  constructor(private authService : AuthService){}

  ngOnInit(): void {
      
  }

  logout(){
    this.authService.logout()
  }
}
