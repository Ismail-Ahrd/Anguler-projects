import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { List } from '../models/list.model';
import { Task } from '../models/task.model';
import { User } from '../models/user.model';
import { AuthenticationService } from './authentication.service';
import { ListService } from './list.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl : string =  "http://localhost:3000/lists"
  tasks! : Task []
  list! : List
  authenticatedUser : User | undefined
  
  constructor(
    private http : HttpClient, 
    private listService : ListService, 
    private authService : AuthenticationService)
    {
      this.authenticatedUser=this.authService.authenticatedUser
    }

   saveTasks(idList : number){
    let list=this.listService.getList(idList)
    if(list) this.list.tasks=list.tasks
   } 

  getTasks(idList : number) : Observable<Task[]>{
    this.saveTasks(idList)
    return of(this.list.tasks)
  }

  deleteTask(idList : number, task : Task) : Observable<boolean>{
    this.saveTasks(idList)
    this.tasks.filter((t)=>t!=task)
    let list = this.listService.getList(idList)
    return of(true)
  }

  updateTask(task : Task) : Observable<boolean>{

    return of(true)
  }
}