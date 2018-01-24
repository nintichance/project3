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
    const UserPage = () => (<UserPage users={this.state.users} />)
    return (
      <Router>
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UserPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App


