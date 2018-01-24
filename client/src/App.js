import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserPage from './components/UserPage'
import Home from './components/Home'
import UserForm from './components/UserForm'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    redirectToUsers: false
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
      console.log(err)
    }
  }

  async createUser(newUser) {

    try {
      const res = await axios.post('/api/users', newUser)
      newUser = res.data
      const updatedUsers = [...this.state.users]
      updatedUsers.unshift(newUser)
      this.setState({ redirectedToUsers: true, users: updatedUsers })
      //this.setState returns a promise; it shoud be the last thing because it breaks 
    } catch (err) {
      console.log(err)
    }
  }

  addNewUser = async (newUser) => {
    try {
      await this.createUser(newUser)
      const users = [...this.state.users]
      users.push(newUser)
      this.setState({ users })
    }
    catch (err) {
      console.log(err)
    }

  }

  render() {
    const HomePage = () => (<Home />)
    const UserComponent = () => (<UserPage users={this.state.users} />)
    const UserFormComponent = () => (<UserForm addNewUser={this.addNewUser} />)
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={UserComponent} />
          <Route exact path="/new-user" component={UserFormComponent} />
        </Switch>
      </Router>
    )
  }
}

export default App


