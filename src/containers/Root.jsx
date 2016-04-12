import React from 'react'
import { connect } from 'react-redux'


var Root = React.createClass({
  
  propTypes: {
    
  },

  childContextTypes: {
    
  },

  handleScroll: function() {
    
  },

  getChildContext: function() {
    
  },

  showNotice: function() {
    
  },

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

module.exports = connect(
  mapStateToProps)(Root);