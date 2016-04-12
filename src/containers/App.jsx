import React from 'react'
import { connect } from 'react-redux'


var App = React.createClass({
  
  propTypes: {},

  render: function() {
    return(
      <div>
        <h1>Ok Go!</h1>
      </div>
    )
  },
})

function mapStateToProps(storeState) {
  return {};
}

export default connect(
  mapStateToProps)(App);