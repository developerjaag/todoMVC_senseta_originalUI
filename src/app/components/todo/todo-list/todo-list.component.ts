import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { Todo } from '../../../models/todo.model';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filter: string;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }// end ngOnInit

}// end class
