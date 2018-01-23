import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  componentWillMount() {

    //Call to Express API for user data from MongoDB
    const getUserData = async () => {
      const data = await axios.get('http://localhost:4000/api/users')
      document.window.append(data)
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
