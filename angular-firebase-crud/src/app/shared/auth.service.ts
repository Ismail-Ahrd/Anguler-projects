import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth : AngularFireAuth, private router : Router) { }

  //login method
  login(email : string, password : string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then((res)=>{
      localStorage.setItem("token","true");
      
      if(res.user?.emailVerified==true){
        this.router.navigateByUrl('/dashboard');
      }else{
        this.router.navigateByUrl('/verify-email');
      }
    }, err=>{
      // console.log(err);
      alert(err.message);
      this.router.navigateByUrl('/login');
    })
  }

  //register method
  register(email : string, password : string){
    this./* `fireAuth` is an instance of `AngularFireAuth` class. */
    fireAuth.createUserWithEmailAndPassword(email,password).then((res)=>{
      alert("Registration successful");
      // console.log(res);
      this.router.navigateByUrl('/login');
      this.sendEmailForVerification(res.user);
    },(err)=>{
      alert(err.message);
      this.router.navigateByUrl('/register');
    })
  }

  //sigh out
  logout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem("token");
      this.router.navigateByUrl('/login');
    },err=>{
      alert(err.message);
    })
  }

  //forgot Password
  forgotPassword(email : string){
    this.fireAuth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigateByUrl('/verify-email')
    },err=>{
      alert(err.message);
    })
  }

  //email verification
  sendEmailForVerification(user : any){
    user.sendEmailVarification().then((res : any)=>{
      this.router.navigateByUrl('/verify-email')
    ,(err : any)=>{
      alert(err.message)
    }})
  }

}
