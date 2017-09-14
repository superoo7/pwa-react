import React, { Component } from 'react'
import { render } from 'react-dom'

//
import App from './App'

class Main extends Component {
  render () {
    return (
      <div>
        <App />
      </div>
    )
  }
}

render(<Main />, document.getElementById('app'))
