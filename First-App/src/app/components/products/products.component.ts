import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import {product} from '../../Product'
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isAdmin:boolean=false
  n:number=0
  userName:string=""
  products: product[]=[]

  constructor(private productService:ProductService, private router:Router, private dataService:DataService, private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products=>this.products=products)
    
    this.authService.isAdmin.subscribe(isAdmin=>this.isAdmin=isAdmin)
    this.authService.n.subscribe((n)=>this.n=n)
    if(this.isAdmin && this.n===1){
      this.userName=this.authService.users[0].name
    }else if(!this.isAdmin && this.n!==0){
      this.userName=this.authService.users[this.n].name
    }
  }
  
  onClick(){
   
  }

  deleteProduct(product:product){
    this.productService.deleteProduct(product)
      .subscribe(()=>this.products=this.products
      .filter(thisProduct=>thisProduct.id!==product.id))
    // console.log(this.products);  
  }

  updateProduct(product:product){
    this.dataService.changeProduct(product)
    this.router.navigate(["/update"])
  }

  goToAdd(){
    this.router.navigate(["/add"])
  }

  logOut(){
    this.router.navigate([""])
  }

}
