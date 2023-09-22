import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs'
import { List } from '../models/list.model';
import { User } from '../models/user.model';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl : string = "http://localhost:3000/lists"
  authenticatedUser : User | undefined

  constructor(private http : HttpClient, private authService : AuthenticationService) {}

  private getUser(){
    this.authService.getUser().subscribe({
      next : (user)=>{
        this.authenticatedUser=user
      }, error : (err)=>{
        throwError(()=>new Error("user not found"))
      }
    })
  }

  getLists() : Observable<List[]>{
    this.getUser()
    if(this.authenticatedUser){
      let id=this.authenticatedUser.id
      return this.http.get<List[]>(this.apiUrl+"?id-user="+id)
    }
    return throwError(()=>new Error("user not found"))
  }

  // getList(idList : number){
  //  let list=this.lists.find((list)=>list.id=idList)
  //  return list
  // }

  deleteList(list : List) : Observable<List>{
    let id=list.id
    return this.http.delete<List>(this.apiUrl+"/"+id)
  }
  
  addList(list :List) : Observable<List>{
    return this.http.post<List>(this.apiUrl,list)
  }

  updateList(list : List) : Observable<List>{
    let id = list.id
    return this.http.put<List>(this.apiUrl+"/"+id,list)
  }
}
