import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';

import * as fromTodo from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl;
  doneAll =  false;


  constructor(private store: Store<AppState>  ) { }

  ngOnInit() {
    this.textInput = new FormControl('', Validators.required);
  }

  // check/uncheck all
  checkAll() {

    this.doneAll = !this.doneAll;

    const action = new fromTodo.CheckAllTodoAction(this.doneAll);
    this.store.dispatch( action );

  }// end checkAll

  // add new todo
  addTodo() {

    // if input dont have content
    if ( this.textInput.invalid ) {
      return;
    }

    // new action to add a new todo on setore
    const action = new fromTodo.AddTodoAction( this.textInput.value );
    this.store.dispatch( action );

    // clear input box
    this.textInput.setValue('');

  }// end addTodo

}// end class
