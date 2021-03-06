import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  render () {
    return (
      <div id='app'>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}
