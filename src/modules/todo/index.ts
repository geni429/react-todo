import { createStore, Store } from 'redux';
import { ADD_TODO, REMOVE_TODO, ALTER_TODO } from './actions';

export interface ToDoReducerState {
  todoList: Array<Task>;
}

const initialState: ToDoReducerState = { todoList: [] };
const todo = (state: ToDoReducerState = initialState, action): ToDoReducerState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          action.payload
        ]
      }
    case REMOVE_TODO:
      return {
        todoList: [
          ...state.todoList
        ].splice(state.todoList.findIndex((task: Task) => task.id === action.payload), 1)
      }
    case ALTER_TODO:
      return {
        todoList: [
          ...state.todoList
        ].map((task: Task) => task.id === action.payload.id ? action.payload : task)
      }
    default:
      return state;
  }
}

const Store: Store = createStore(todo);

export default todo;