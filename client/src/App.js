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
    redirectToUsers: false,
    createdUser: {}
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

  async createUser(){
    try{
      const res = await axios.post('/api/users', {
        user: this.state.user
      })
      console.log('NEWUSER:', this.state.user)
      this.setState({redirectToUsers: true, createdUser: res.data})
    }catch(err){
      console.log(err)
    }
  }

  addNewUser = (newUser) => {
    const users = [...this.state.users]
    users.push(newUser)
    this.setState({users})
    this.createUser()
  }

  render() {
    const HomePage = () => (<Home />)
    const UserComponent = () => (<UserPage users={this.state.users} />)
    const UserFormComponent = ()=> (<UserForm addNewUser = {this.addNewUser} />)
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


