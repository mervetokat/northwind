import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../Models/loginModel';

import { TokenModel } from '../Models/tokenModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiUrl="https://localhost:44396/api/auth";
  constructor(private httpClient:HttpClient) { }


  login(loginModel:LoginModel){
return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }
  isAuthenticated()
  {
    if(localStorage.getItem("token"))
    {
return true;
    }else{
      return false;
    }
  }
}
