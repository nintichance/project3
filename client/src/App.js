import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UserPage from './components/UserPage'
import Home from './components/Home'
import axios from 'axios'

class App extends Component {
  state = {
    users: []
  }
  componentWillMount() {
    //Call to Express API for user data from MongoDB
    this.getUserData()
  }

  async getUserData() {
    try {
      const res = await axios.get('/api/users')
      const users = res.data
      this.setState({ users: users })
    }
    catch (err) {
      console.error(err)
    }
  }

  render() {
    const HomePage = () => (<Home />)
    const UserComponent = () => (<UserPage users={this.state.users} />)
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/" component={UserComponent} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App


