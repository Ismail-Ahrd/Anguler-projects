import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs'
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import {ValidationErrors} from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl : string = "http://localhost:3000/users"
  private users! : User []
  authenticatedUser : User | undefined

  constructor(private http : HttpClient) { 
    this.http.get<User[]>(this.apiUrl).subscribe({
      next : (users)=>{
        this.users=users
      },error : err=>{
        console.log(err);
      }
    })
    
  }

  login(email : string, password : string) : Observable<User>{
    let user=this.users.find(u=>u.email==email)
    if(!user) return throwError(()=> new Error("Email incorrect"))
    if(user.password != password) return throwError(()=> new Error("Password incorrect"))
    return of(user)
  }

  register(name:string,email:string,password:string) : Observable<User>{
    let id=this.users.length+1
    let user : User = {id : id,name : name, email : email, password : password}
    return this.http.post<User>(this.apiUrl,user)
  }

  authenticateUser(user : User){
    this.authenticatedUser=user
    localStorage.setItem("authUser",JSON.stringify({name:user.name, jwt:"JWT_TOKEN"}))
    return of(true)
  }

  getUser() : Observable<User>{
    if(this.authenticatedUser){
      return of(this.authenticatedUser)
    }
    return throwError(()=>new Error("user not fund"))
  }

  logout() : Observable<boolean>{
    this.authenticatedUser=undefined
    localStorage.removeItem("authUser")
    return of(true)
  }

  getErrorMessage(fildName : string, error : ValidationErrors) : string{
    if (error["required"]){
      return fildName + " is required"
    }
    else if (error["email"]){
      return "Please enter the email correctly"
    }
    else if(error["minlength"]){
      return fildName + " should have at least " + error['minlength']['requiredLength'] + " Characters"
    }
    else return " "
  }

}
