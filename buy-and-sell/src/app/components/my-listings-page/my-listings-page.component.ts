import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/types';
import { fakeListings } from 'src/app/fake-data';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit{
  listings : Listing [] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings;
  }

  onDeletClicked(listningId : string) : void {
    alert(`you deleted your listing with id ${listningId}`);
  }
}
