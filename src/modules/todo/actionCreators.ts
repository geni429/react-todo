import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL_TODOS, CANCLE_COMPLETED_TODO, CANCLE_COMPLETED_ALL_TODOS } from './actions';

function createAction<T extends string>(type: T): Action<T>
function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

export const addTodo = (todo: Task) => createAction(ADD_TODO, todo);
export const removeTodo = (id: string) => createAction(REMOVE_TODO, id);
export const editTodo = (todo: Task) => createAction(EDIT_TODO, todo);
export const completeTodo = (id: string) => createAction(COMPLETE_TODO, id);
export const completeAllTodos = () => createAction(COMPLETE_ALL_TODOS);
export const cancleCompletedTodo = (id: string) => createAction(CANCLE_COMPLETED_TODO, id);
export const cancleCompletedAllTodos = () => createAction(CANCLE_COMPLETED_ALL_TODOS);

export type AddTodoAction = ReturnType<typeof addTodo>;
export type RemoveTodoAction = ReturnType<typeof removeTodo>;
export type EditTodoAction = ReturnType<typeof editTodo>;
export type CompleteTodoAction = ReturnType<typeof completeTodo>;
export type CompleteAllTodosAction = ReturnType<typeof completeAllTodos>;
export type CancleCompletedTodoAction = ReturnType<typeof cancleCompletedTodo>;
export type CancleCompletedAllTodosAction = ReturnType<typeof cancleCompletedAllTodos>;
export type TodoActions =
              AddTodoAction
              & RemoveTodoAction
              & EditTodoAction
              & CompleteTodoAction
              & CompleteAllTodosAction
              & CancleCompletedTodoAction
              & CancleCompletedAllTodosAction;