import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {

  async componentWillMount() {
    //Call to Express API for user data from MongoDB
    try {
      const res = await axios.get('http://localhost:4000/api/users')
      const users = res.data
      document.window.append(users)
    }
    catch(err) {
      console.error(err)
    }
  }

  render() {
    return (
      <div className="App">
        Hello
      </div>
    )
  }
}

export default App
