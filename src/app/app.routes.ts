import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { ProductComponent } from './Components/product/product.component';
import { CategoryComponent } from './Components/category/category.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';
import { LoginComponent } from './Components/login/login.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [

    {path:"", pathMatch:"full", component:ProductComponent},
    {path:"/products", component:ProductComponent},
    {path:"/products/category/:categoryId", component:ProductComponent},
    {path:"products/add",component:ProductAddComponent,canActivate:[loginGuard]},
    {path:"login",component:LoginComponent}
    

];
