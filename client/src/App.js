import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserPage from './components/UserPage'
import Home from './components/Home'
import UserForm from './components/UserForm'
import UserShow from './components/UserShow'
import KidPage from './components/UserShow'
import NavBar from './components/NavBar'
import axios from 'axios'



class App extends Component {
  state = {
    users: [],
    user: {}
  }
  componentWillMount() {
    //Call to Express API for user data from MongoDB
    this.getUserData()
  }
  //GET, POST, PATCH, DELETE User Information

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
      // updatedUsers.unshift(newUser)
      this.setState({ users: updatedUsers })
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

    console.log("ADDNEWUSER", this.addNewUser)
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
          <Route exact path='/users/:userId/kids' component={KidPage} />
        </Switch>
      </Router>
    )
  }
}

export default App


