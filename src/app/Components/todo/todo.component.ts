import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';
import { response } from 'express';
import { TodoService } from '../../services/todoservice';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
todos:Todo[]=[];
constructor(private todoService:TodoService){}

getTodos(){
this.todoService.getTodos().subscribe(response=>{
  this.todos=response
})
}
}
