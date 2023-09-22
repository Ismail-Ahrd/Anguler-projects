import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productFormGroup! : FormGroup

  constructor(private fb : FormBuilder, private productService : ProductService) {}

  ngOnInit(): void {
      this.productFormGroup=this.fb.group({
        name : this.fb.control(null,[Validators.required,Validators.minLength(4)]),
        price : this.fb.control(null,[Validators.required,Validators.min(200)]),
        promotion : this.fb.control(false,[Validators.required])
      })
  }

  handleNewProduct(){
    let product=this.productFormGroup.value
    this.productService.addNewProduct(product).subscribe({
      next : (data)=>{
        alert("Product addad successfully")
        this.productFormGroup.reset()
      }, error : (err)=>{
        console.log(err);
        
      }
    })
  }
  getErrorMessage(fieldName : string, error : ValidationErrors){
    return this.productService.getErrorMessage(fieldName,  error)
  }

  
}
