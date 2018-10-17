import { ADD_TODO, REMOVE_TODO, ALTER_TODO } from './actions';

function createAction<T extends string>(type: T): Action<T>
function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

export const addToDo = (todo: Task) => createAction(ADD_TODO, todo);
export const removeToDo = (taskId: string) => createAction(REMOVE_TODO, taskId);
export const alterToDo = (todo: Task) => createAction(ALTER_TODO, todo);

export type AddToDoAction = ReturnType<typeof addToDo>;
export type RemoveToDoAction = ReturnType<typeof removeToDo>;
export type AlterToDoAction = ReturnType<typeof alterToDo>;