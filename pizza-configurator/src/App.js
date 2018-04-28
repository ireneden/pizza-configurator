import React, { Component } from 'react'
import Page from './components/Page'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App-title">
        <h1 className="title">Hangry?<span role="img" aria-label="emoji" > 🤤😡</span></h1>
          <Page />
      </div>
    )
  }
}

export default App
