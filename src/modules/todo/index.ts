import { createStore, Store } from 'redux';
import { ADD_TODO, REMOVE_TODO, ALTER_TODO, COMPLETE_TODO, COMPLETE_ALL_TODOS, CANCLE_COMPLETED_TODO, CANCLE_COMPLETED_ALL_TODOS  } from './actions';
import { TodoActions } from './actionCreators';

export interface TodoReducerState {
  todoList: TaskList;
}

const initialState: TodoReducerState = { todoList: [] };
const todo = (state: TodoReducerState = initialState, action: TodoActions): TodoReducerState => {
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
        ].splice(state.todoList.findIndex((task: Task) => task.id === action.payload.todo), 1)
      }
    case ALTER_TODO:
      return {
        todoList: state.todoList.map((task: Task) =>
          task.id === action.payload.id ? action.payload : task)
      }
    case COMPLETE_TODO:
      return {
        todoList: state.todoList.map((task: Task) =>
          task.id === action.payload ? { ...task, isComplete: true } : task)
      }
    case COMPLETE_ALL_TODOS:
      return {
        todoList: state.todoList.map((task: Task) =>
          ({ ...task, isComplete: true }))
      }
    case CANCLE_COMPLETED_TODO:
      return {
        todoList: state.todoList.map((task: Task) =>
          task.id === action.payload ? { ...task, isComplete: false } : task)
      }
    case CANCLE_COMPLETED_ALL_TODOS:
      return {
        todoList: state.todoList.map((task: Task) =>
          ({ ...task, isComplete: false }))
      }
    default:
      return state;
  }
}

const Store: Store = createStore(todo);

export default todo;