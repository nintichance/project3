import React, { Component } from 'react'
import './App.css'

import UserPage from './components/UserPage'
import axios from 'axios'

class App extends Component {
  state = {
    users: []
  }
  componentWillMount() {
    //Call to Express API for user data from MongoDB
    this.getUserData()
  }
  
  async getUserData(){try {
    const res = await axios.get('/api/users')
     const users = res.data
     console.log(users)
    this.setState({users: users})
  }
  catch(err) {
    console.error(err)
  }}

  render() {
    return (
      <div>
        <UserPage />
      </div>
    )
  }
}

export default App
