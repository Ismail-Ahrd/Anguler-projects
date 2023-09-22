import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions= [
    {route: "/home", title: "Home", icon: "house"},
    {route: "/gpt", title: "GPT", icon: "person"},
  ]
  currentRoute!: string;

  constructor(private router: Router) {
  }

  handleGoToRoute(route: string) {
    this.currentRoute=route;
    this.router.navigateByUrl(`/${route}`);
  }
}
