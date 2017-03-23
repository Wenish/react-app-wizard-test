import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//Redux tut
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

console.log(store);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
