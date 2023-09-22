import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private authService : AuthenticationService, private router : Router) {}

  ngOnInit(): void {
      
  }

  isAuthenticated(){
    return this.authService.authenticatedUser!=undefined
  }

  handleLogout(){
    this.authService.logout().subscribe({
      next : (data)=>{
        this.router.navigateByUrl("/")
      }
    })
  }
}
