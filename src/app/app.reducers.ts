import { Todo } from './models/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './components/todo/todo.reducer';
import * as fromFilter from './components/todo/filter/filter.reducer';

import * as fromFilterActions from './components/todo/filter/filter.actions';


export interface AppState {
    todos: Todo[];
    filter: fromFilterActions.validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filterReducer
};
