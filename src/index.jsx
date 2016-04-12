import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import createLogger from 'redux-logger'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import { Root } from './containers'
import configureStore from './store'


function initApp(initialState) {
  var logger = createLogger({
    stateTransformer: function(state) {
      return state.toJS();
    }
  });
  ReactDOM.render(
    <Root store={configureStore(initialState)} />, document.getElementById('app')
  );
}

initApp({})