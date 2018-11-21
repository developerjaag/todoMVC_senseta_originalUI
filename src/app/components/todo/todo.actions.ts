import {Action} from '@ngrx/store';

export const ADD_TODO = '[TODO] Add todo';
export const CHECK_TODO = '[TODO] Check todo';
export const CHECK_ALL_TODO = '[TODO] Check all todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const DELETE_ALL_TODO = '[TODO] Delete all todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;
    constructor(public text: string) {}
}

export class CheckTodoAction implements Action {
    readonly type = CHECK_TODO;
    constructor(public id: number) {}
}

export class CheckAllTodoAction implements Action {
    readonly type = CHECK_ALL_TODO;
    constructor(public done: boolean) {}
}

export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;
    constructor(public id: number, public text: string) {}
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;
    constructor(public id: number) {}
}

export class DeleteAllTodoAction implements Action {
    readonly type = DELETE_ALL_TODO;
}

export type Actions = AddTodoAction |
                      CheckTodoAction |
                      CheckAllTodoAction |
                      EditTodoAction |
                      DeleteTodoAction |
                      DeleteAllTodoAction;
