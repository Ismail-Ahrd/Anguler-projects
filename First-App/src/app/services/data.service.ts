import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private idSource=new BehaviorSubject<string>("")
  id=this.idSource.asObservable()
  private nameSource=new BehaviorSubject<string>("")
  name=this.nameSource.asObservable()
  private priceSource=new BehaviorSubject<string>("")
  price=this.priceSource.asObservable()

  constructor() { }

  changeProduct(product:product){
    this.idSource.next(product.id)
    this.nameSource.next(product.name)
    this.priceSource.next(product.price)
  }

}
