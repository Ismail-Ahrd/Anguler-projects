import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private userService: UserService) {}

  ngOnInit(): void {
     this.onGetUsers();
     this.onGetUser(1);
  }
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      {
        next(data: User[]) {
          console.log(data)
        },
        error(err: any) {
          console.log(err)
        },
        complete() {
          console.log('completed')
        }
      }
    )
  }

  onGetUser(id: number): void {
    this.userService.getUser(id).subscribe(
      {
        next(data: User) {
          console.log(data)
        },
        error(err: any) {
          console.log(err)
        },
        complete() {
          console.log('completed')
        }
      }
    )
  }
}
