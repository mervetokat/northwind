import { Component } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductResponseModel } from '../../Models/productResponseModel';
import { get } from 'http';
import { HttpClient } from '@angular/common/http';  
import { response } from 'express';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  products:Product[]=[];
  apiUrl="https://localhost:44396/api/Products/getall";

 // productResponseModel:ProductResponseModel;
constructor(private httpClient:HttpClient){}
 getProducts()
{
  this.httpClient.get<ProductResponseModel>(this.apiUrl).
  subscribe(response=>{
  this.products=response.data});
}
} 


