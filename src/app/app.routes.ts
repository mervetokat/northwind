import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { ProductComponent } from './Components/product/product.component';
import { CategoryComponent } from './Components/category/category.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';

export const routes: Routes = [

    {path:"", pathMatch:"full", component:ProductComponent},
    {path:"/products", component:ProductComponent},
    {path:"/products/category/:categoryId", component:ProductComponent},
    {path:"products/add",component:ProductAddComponent}
    

];
