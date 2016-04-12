import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import Immutable from 'immutable'
import createLogger from 'redux-logger'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import routes from './routes'



function initApp(initialState) {
  var logger = createLogger({
    stateTransformer: function(state) {
      return state.toJS();
    }
  });
  var store = compose(
    applyMiddleware(logger, thunk)
  )(createStore)(rootReducer, Immutable.fromJS(initialState))
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
  );
}

initApp({})