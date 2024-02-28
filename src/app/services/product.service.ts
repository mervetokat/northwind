import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44396/api/Products/getall";
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ListResponseModel<Product>>
  {
  return  this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
