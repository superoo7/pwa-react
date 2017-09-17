import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// CSS
import styles from './App.css'
import './Base.css'

import Header from './../Header/Header'
import Routes from '../Routes/Routes'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <div className={styles.container}>
            <Routes />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
