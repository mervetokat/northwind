import { Component } from '@angular/core';
import { Category } from '../../Models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {
categories:Category[]=[];
  currentCategory: Category;

constructor(private categoryService:CategoryService){}
getCategories()
{this.categoryService.getCategories().subscribe(response=>{
  this.categories=response.data

});
}
setCurrentCategory(category:Category)
{
  console.log(category.categoryName)
  this.currentCategory=category;
}
getCurrentCategoryClass(category:Category){
  if(category==this.currentCategory){
    return "list-group-item active"
  } else{
    return "list-group-item"
  }
}
getAllCategoryClass()
{
  if(!this.currentCategory)
  {
    return "list-group-item active"
  }
  else
  return "list-group-item"
}
}
