import { createStore, combineReducers, Store } from 'redux';
import todo, { TodoReducerState } from './todo';

export interface RootState {
  todo: TodoReducerState;
}

const RootReducer = combineReducers({
  todo
});
const Store: Store = createStore(RootReducer);

export default Store;