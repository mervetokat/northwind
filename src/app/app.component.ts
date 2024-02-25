import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./Components/navi/navi.component";
import { ProductComponent } from "./Components/product/product.component";
import { CategoryComponent } from "./Components/category/category.component";
import { HttpClientModule} from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NaviComponent, ProductComponent, CategoryComponent,HttpClientModule]
})
export class AppComponent {
  title = 'northwind';
  
}
