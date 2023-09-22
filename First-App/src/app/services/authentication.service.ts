import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users=[{
    name:"admin",
    password:"admin"
  },{
    name:"user",
    password:"user"
  }]
  isLogin:boolean=false
  isAdminSource= new BehaviorSubject<boolean>(false)
  isAdmin=this.isAdminSource.asObservable()
  k=new BehaviorSubject<number>(0)
  n=this.k.asObservable()
  
  constructor(private router :Router) { }

  login(name:string,password:string){
    if(this.users[0].name==name && this.users[0].password==password){
      this.isLogin=true
      this.isAdminSource.next(true)
      this.k.next(1)
      this.router.navigate(["/home"])
    }else{

    }
    for(let i:number=1;i<this.users.length;i++){
      if(this.users[i].name==name && this.users[i].password==password){
        this.isLogin=true
        this.isAdminSource.next(false)
        this.k.next(i)
        this.router.navigate(["/home"])
      }
    }
    if(!this.isLogin){
      alert("your Username or Password is false")
    }  
  }


}
