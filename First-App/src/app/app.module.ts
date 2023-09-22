import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';


const appRoutes:Routes=[
  {path:"", component:AuthenticationComponent},
  {path:"home", component:ProductsComponent},
  {path:"add", component:AddProductComponent},
  {path:"update", component:UpdateProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ButtonComponent,
    NavbarComponent,
    ProductsComponent,
    ProductComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
