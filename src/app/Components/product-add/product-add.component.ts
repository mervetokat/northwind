import { Component } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
productAddForm:FormGroup;
constructor(private formBuilder:FormBuilder, private productService:ProductService,
  private toastrService:ToastrService){}

createProductAddForm()
{
this.productAddForm=this.formBuilder.group({
  productName:["",Validators.required],
  unitPrice:["",Validators.required],
  unitsInStock:["",Validators.required],
  categoryId:["",Validators.required]
});

}
add()
{
  if(this.productAddForm){
 let productModel=Object.assign({},this.productAddForm.value)
 this.productService.add(productModel).subscribe(data=>
  {
   
    this.toastrService.success("ürün eklemesi basarılı")
  }, responseError=>{
    if(responseError.error.Errors.leng>0)
    {
      console.log(responseError.error.Errors)
      for (let i = 0; i < responseError.error.Errors.leng; i++) {
        this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"dogrulama hatası")
        
      } 
     
    }
    
  })

 
}else{
this.toastrService.error("form eksik")
}
}
}
