import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { EditListingPageComponent } from './components/edit-listing-page/edit-listing-page.component';
import { ListingDetaiPageComponent } from './components/listing-detai-page/listing-detai-page.component';
import { ListingsPageComponent } from './components/listings-page/listings-page.component';
import { MyListingsPageComponent } from './components/my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './components/new-listing-page/new-listing-page.component';

const routes: Routes = [
  {path :'', redirectTo : '/listings', pathMatch : 'full'},
  {path :'listings', component : ListingsPageComponent, pathMatch : 'full'},
  {path :'listings/:id', component : ListingDetaiPageComponent},
  {path :'contact/:id', component : ContactPageComponent},
  {path :'edit-listing/:id', component : EditListingPageComponent},
  {path :'my-listings', component : MyListingsPageComponent},
  {path :'new-listing', component : NewListingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
