import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  userFormGroup! : FormGroup
  errorMessage! :string

  constructor(
    private fb : FormBuilder, 
    private authService : AuthenticationService, 
    private router : Router
    ) {}

  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      name : this.fb.control(null,[Validators.required]),
      email : this.fb.control(null,[Validators.required,Validators.email]),
      password : this.fb.control(null,[Validators.required,Validators.minLength(4)])
    })
  }

  handleRegister(){
    let name=this.userFormGroup.value.name
    let email=this.userFormGroup.value.email
    let password=this.userFormGroup.value.password
    let errorName=this.userFormGroup.controls["name"].errors
    let errorEmail=this.userFormGroup.controls["email"].errors
    let errorPassword=this.userFormGroup.controls["password"].errors
    if(!errorName && !errorEmail && !errorPassword){
      this.authService.register(name,email,password).subscribe({
        next : (user)=>{
          this.authService.authenticateUser(user).subscribe({
            next : (data)=>{
              this.router.navigateByUrl("/")
            }, error : (err)=>{
              this.errorMessage=err
            }
          })
        }, error : (err) =>{
          this.errorMessage=err
        }
      })
    }
  }

  getErrorMessage(fildName : string, error : ValidationErrors) : string{
    return this.authService.getErrorMessage(fildName,error)
  }
}
