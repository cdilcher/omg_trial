import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router';
import routes from '../routes'
import DevTools from './DevTools';


export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={browserHistory} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    );
  }
}