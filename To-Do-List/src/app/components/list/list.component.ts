import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  lists! : List []
  errorMessage! : string

  constructor(
    private listService : ListService, 
    private authService : AuthenticationService)
    {  }

  ngOnInit(): void {
    this.listService.getLists().subscribe({
      next : (lists)=>{
        this.lists=lists
      },error : (err)=>{
        this.errorMessage=err
      }
    })
  }

  deleteList(list : List){
    this.listService.deleteList(list).subscribe({
      next : (list)=>{
        let index=this.lists.indexOf(list);
        this.lists.splice(index,1);
      },error : (err)=>{
        this.errorMessage=err
      }
    })
  }

  updateList(list : List){
    console.log(list.name+" updated");
  }

  addList(){
    console.log("List added")
  }


  
}
