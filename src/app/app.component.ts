import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./Components/navi/navi.component";
import { ProductComponent } from "./Components/product/product.component";
import { CategoryComponent } from "./Components/category/category.component";
import { TodoComponent} from './Components/todo/todo.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NaviComponent,BrowserAnimationsModule,
      ToastrModule, FormsModule, ProductComponent, CategoryComponent, ReactiveFormsModule, HttpClientModule, TodoComponent]
})

export class AppComponent {
  title = 'northwind';
 
}
