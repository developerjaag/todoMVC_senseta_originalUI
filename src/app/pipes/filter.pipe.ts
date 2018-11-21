import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import * as fromFilter from '../components/todo/filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: fromFilter.validFilters): Todo[] {

    switch ( filter ) {
      // return only completed todos
      case 'completed':
        return todos.filter( todo => todo.done );
      // return only todos on state pending
      case 'pending':
        return todos.filter( todo => !todo.done );
      // return all todos
      default:
        return todos;
    }// end switch

  }

}
