import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  id:string=""
  name:string=""
  price:string=""

  constructor(private productService:ProductService, private dataService:DataService, private router:Router) {}
  
  ngOnInit(){ 
    this.dataService.id.subscribe(id=>this.id=id)
    this.dataService.name.subscribe(name=>this.name=name)
    this.dataService.price.subscribe(price=>this.price=price)
  }
  
  update(){
    this.productService.updateProduct(this.id,this.name,this.price).subscribe()
    this.router.navigate(["/home"])
  }

}
