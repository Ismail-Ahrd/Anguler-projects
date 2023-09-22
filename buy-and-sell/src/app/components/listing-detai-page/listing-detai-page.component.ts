import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from 'src/app/types';
import { fakeListings } from 'src/app/fake-data';

@Component({
  selector: 'app-listing-detai-page',
  templateUrl: './listing-detai-page.component.html',
  styleUrls: ['./listing-detai-page.component.css']
})
export class ListingDetaiPageComponent implements OnInit{
  listing : Listing | undefined;

  constructor(private route : ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.route);
    const id = this.route.snapshot.paramMap.get('id');
    this.listing=fakeListings.find(listing=>listing.id==id);
  }
}
