import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userFormGroup! : FormGroup
  errorMessage : string=""

  constructor(
    private fb : FormBuilder, 
    private authService : AuthenticationService,
    private router : Router
    ) {}

  ngOnInit(): void {
      this.userFormGroup=this.fb.group({
        email : this.fb.control(""),
        password  :this.fb.control("")
      })
  }

  handleLogin(){
    let email = this.userFormGroup.value.email
    let password = this.userFormGroup.value.password
    this.authService.login(email,password).subscribe({
      next : (user)=>{
        this.authService.authenticateUser(user).subscribe({
          next : (data)=>{
            this.router.navigateByUrl("/home")
          }, error : (err)=>{
            this.errorMessage=err
          }
        })
      },
      error : (err)=>{
        this.errorMessage=err
      }
    })
  }
}
