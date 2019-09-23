import React from 'react';
import TodoList from './container/TodoList';
import { Provider } from 'react-redux';
import store from './Store/index.js'

export default function App() {
  return (
    <Provider store={store}>
      <TodoList/>
    </Provider>
  );
}
