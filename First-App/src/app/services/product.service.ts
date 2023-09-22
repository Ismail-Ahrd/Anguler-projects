import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {product} from '../Product';
import {PRODUCTS} from '../MyProducts'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:product[]=PRODUCTS
  constructor() { }

  getProducts():Observable<product[]> {
    const products=of(this.products)
    return products
  }

  deleteProduct(product:product):Observable<product[]>{
    return of(this.products.filter(thisProduct=> thisProduct.id!==product.id))
  }

  addProduct(product:product):Observable<number>{
    return of(this.products.push(product))
  }

  updateProduct(id:string,name:string,price:string):Observable<product[]>{
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].id ===id){
        this.products[i].name=name
        this.products[i].price=price
      }
    }
    return of(this.products)
  }

}
