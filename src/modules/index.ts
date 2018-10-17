import { createStore, combineReducers, Store } from 'redux';
import todo, { ToDoReducerState } from './todo';

export interface RootState {
  todo: ToDoReducerState;
}

const RootReducer = combineReducers({
  todo
});
const Store: Store = createStore(RootReducer);

export default Store;