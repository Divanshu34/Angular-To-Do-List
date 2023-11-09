import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todosFromLocal! : string;
  todos!: Todo[];
  constructor(){
    this.todosFromLocal = localStorage.getItem("todos")!;
    if(this.todosFromLocal === null){
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.todosFromLocal);
    }
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    console.log(index);
    this.todos.splice(index, 1);
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    this.todos.push(todo);
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
