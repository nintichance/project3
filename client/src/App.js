import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Imported Components
import UserPage from './components/UserPage'
import Home from './components/Home'
import UserForm from './components/UserForm'
import UserShow from './components/UserShow'
import NavBar from './components/NavBar'


import axios from 'axios'



class App extends Component {
  state = {
    users: [],
    user: {}
  }
  componentWillMount() {
//Call these functions as soon as App.js Component mounts
    this.getUserData()
  }

//(GET) Seeded User Data from Express API
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
//(POST) Create a New User  
  async createUser(newUser) {

    try {
      const res = await axios.post('/api/users', newUser)
      newUser = res.data
      const updatedUsers = [...this.state.users]
      this.setState({ users: updatedUsers })
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

    const UserComponent = () => (<UserPage users={this.state.users} />)
    const UserFormComponent = (props) => (<UserForm addNewUser={this.addNewUser} {...props} />)

    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UserComponent} />
          <Route exact path="/new-user" component={UserFormComponent} />
          <Route path='/users/:userId' component={UserShow} />
        </Switch>
      </Router>
    )
  }
}

export default App


