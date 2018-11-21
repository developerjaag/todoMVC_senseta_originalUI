import { Component, OnInit } from '@angular/core';

import * as fromFilter from '../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { Todo } from '../../../models/todo.model';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  todosPending: number;

  validFilters: fromFilter.validFilters [] = ['all', 'completed', 'pending'];
  currentFilter: fromFilter.validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.countPending( state.todos );
      this.currentFilter = state.filter;
    });
  }// end ngOnInit

  // to change filter
  changeFilter( newFilter: fromFilter.validFilters ) {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch( action );
  }// end changeFilter

  // coutn todos on state pending
  countPending( todos: Todo[] ) {
    this.todosPending = todos.filter( todo => !todo.done ).length;
  }// end countPending

  // delete all todos
  deleteAllTodos() {
    const action = new fromTodo.DeleteAllTodoAction();
    this.store.dispatch( action );
  }// end deleteAllTodos

}// end class
