import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor(){
    this.todos = [
      {
        sno: 1, 
        title: "This is title-1",
        desc: "This is description-1",
        active: true
      },
      {
        sno: 2, 
        title: "This is title-2",
        desc: "This is description-2",
        active: true
      },
      {
        sno: 3, 
        title: "This is title-3",
        desc: "This is description-3",
        active: true
      },
      {
        sno: 4, 
        title: "This is title-4",
        desc: "This is description-4",
        active: true
      },
      {
        sno: 5, 
        title: "This is title-5",
        desc: "This is description-5",
        active: true
      },
    ]
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
