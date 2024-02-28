import { Component } from '@angular/core';
import { Product } from '../../Models/product';
import { get } from 'http';
 
import { response } from 'express';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { VatAddedPipe } from "../../pipes/vat-added.pipe";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [VatAddedPipe]
})
export class ProductComponent {
  
  products:Product[]=[];
  dataLoaded=false;
  filterText="";


 // productResponseModel:ProductResponseModel;
constructor(private productService:ProductService, private activatedRoute:ActivatedRoute){}
ngOnInit(): void{
  this.activatedRoute.params.subscribe(params=>
    {
      if(params["categoryId"])
      {
        this.getProductsByCategory(params["categoryId"])
      }
      else
      this.getProducts()
    })
} 
getProducts()
{this.productService.getProducts().subscribe(response=>{
  this.products=response.data
  this.dataLoaded=true;
})
  
}
getProductsByCategory(categoryId:number)
{this.productService.getProductsByCategory(categoryId).subscribe(response=>{
  this.products=response.data
  this.dataLoaded=true;
})
  
}
} 


