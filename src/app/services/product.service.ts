import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Product } from '../Models/product';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44396/api/";
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ListResponseModel<Product>>
  {
    let newPath=this.apiUrl+"products/getall"
  return  this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
  getProductsByCategory(categoryId:Number):Observable<ListResponseModel<Product>>
  {
    let newPath=this.apiUrl+"products/getbycategory?categoryId="+categoryId
  return  this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product 
    
    )
  }
}
