import { Component } from '@angular/core';
import { Product } from '../../Models/product';
import { get } from 'http';
 
import { response } from 'express';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  products:Product[]=[];
  dataLoaded=false;


 // productResponseModel:ProductResponseModel;
constructor(private productService:ProductService){}
 getProducts()
{this.productService.getProducts().subscribe(response=>{
  this.products=response.data
  this.dataLoaded=true;
})
  
}
} 


