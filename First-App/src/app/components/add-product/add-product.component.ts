import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name:string=""
  price:string=""
  products:product[]=[]

  constructor(private productService:ProductService, private router:Router){ }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products=>this.products=products)
  }

  add(){
    if(this.name!=="" && this.price!==""){
      let product:product={id:(this.products.length+1).toString(),name:this.name,price:this.price}
      this.productService.addProduct(product).subscribe()
      this.router.navigate(["/home"])
    }else{
      alert("please add the the name and the price")
    }
  }

}
