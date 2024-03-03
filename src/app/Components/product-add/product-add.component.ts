import { Component } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
productAddForm:FormGroup;
constructor(private formBuilder:FormBuilder){}

createProductAddForm()
{
this.productAddForm=this.formBuilder.group({
  productName:["",Validators.required],
  unitPrice:["",Validators.required],
  unitsInStock:["",Validators.required],
  categoryId:["",Validators.required]
});

}
}
