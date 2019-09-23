import { combineReducers } from 'redux';
import TodoListReducer from './todolist.reducer';

const rootReducer = combineReducers({
  todo: TodoListReducer
});


export default rootReducer;
