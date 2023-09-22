import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';
import { FormGroup, FormBuilder } from '@angular/forms'
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products! : Array<Product>;
  currentPage : number=0;
  pageSize : number=5;
  totalPages : number=0;
  errorMessage! : string;
  searchFormGroup! : FormGroup;
  currentAction : string="all";
  
  constructor(private productService:ProductService, private fb : FormBuilder, 
              public authService : AuthenticationService, private router : Router) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      Keyword : this.fb.control(null)
    })

    this.handleGetPageProducts();
  }

  handleGetPageProducts(){
    this.productService.getPageProducts(this.currentPage,this.pageSize).subscribe({
      next : (data)=>{
        this.products=data.products;
        this.totalPages=data.totalPages;
      },
      error : (err)=>{
        this.errorMessage=err;
      }
    }) 
  } 

  handleGetAllProducts(){
    this.productService.getAllProducts().subscribe({
      next : (data)=>{
        this.products=data;
      },
      error : (err)=>{
        this.errorMessage=err;
      }
    })
  }

  handleDeleteProduct(product:Product){
    let conf=confirm("Are you sure?");
    if(!conf) return;
    this.productService.deleteProduct(product.id).subscribe({
      next : (data)=>{
         // let index=this.products.indexOf(product);
        // this.products.splice(index,1);
        this.products=this.products.filter(p=>p.id!=product.id);
      },
      error : (err)=>{
        this.errorMessage=err;
      }
    })
  }

  handleSetPromotion(product:Product){
    let promo=product.promotion
    this.productService.setPromotion(product.id).subscribe({
      next : (data)=>{
        product.promotion= !promo;
      },
      error : (err)=>{
        this.errorMessage=err;
      }
    })
  }

  handleSearchProducts(){
    this.currentAction="search";
    this.currentPage=0;
    let Keyword=this.searchFormGroup.value.Keyword;
    this.productService.searchProduct(Keyword,this.currentPage,this.pageSize).subscribe({
      next : (data)=>{
        this.products=data.products;
        this.totalPages=data.totalPages;
      },
      error : (err)=>{
        this.errorMessage=err;
      }
    })
  }

  goToPage(i:number){
    this.currentPage=i;
    if(this.currentAction==="all"){
      this.handleGetPageProducts();
    }else{
      this.handleSearchProducts();
    }
    
  }

  handleNewProduct(){
    this.router.navigateByUrl("/admin/new-product")
  }

  handleEditProduct(product : Product){
    this.router.navigateByUrl("/admin/edit-product/"+product.id)
  }
}
