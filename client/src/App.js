import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserPage from './components/UserPage'
import Home from './components/Home'
import UserForm from './components/UserForm'
import UserShow from './components/UserShow'
import axios from 'axios'

//import UserTest from './components/UserTest'


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

  //TESTROUTE
  //   async getUserInfo(userId) {
  //     try{
  //     const res = await axios.get(`/api/users/${userId}`)
  //     const user = res.data
  //     this.setState({user})
  //     }
  //     catch(err){
  //         console.log(err)
  //     }
  // }


  // updateUser = (event) =>{
  //   event.preventDefault()
  //   axios.patch(`/api/Users/${this.props.match.params.userId}`, this.state.user)
  //   .then((res)=>{
  //       const update = res.data
  //       const user = this.state.user
  //       //console.log('Upadated user infor', res.data)
  //       this.props.updateUsers(user, update)

  //   }).catch((err)=>{
  //       console.log(err)
  //   })
  //   this.setState({redirctToUser: true})
  //   }


  //   updateUser = async (event) => {
  //     try{
  //       event.preventDefault()
  //       await axios.patch(`/api/users/${this.props.match.params.userId}`, this.state.user)
  //       const user = this.state.user
  //       this.setState({user})
  //     }
  //     catch(err){
  //       console.log(err)
  //     }
  //   }

  // updateUsers = (user, updatedUsers) => {
  //   const userToUpdate = this.state.users.indexOf(user)
  //   const users = [...this.state.users]
  //   users[userToUpdate] = updatedUsersthis.setState({users})
  // }

 

  render() {

    console.log("ADDNEWUSER", this.addNewUser)
    const HomePage = () => (<Home />)
    const UserComponent = () => (<UserPage users={this.state.users} />)
    const UserFormComponent = (props) => (<UserForm addNewUser={this.addNewUser} {...props} />)
    //const UserTestComponent = () => (<UserTest getUserInfo = {this.getUserInfo} user = {this.state.user}/>)
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={UserComponent} />
          <Route exact path="/new-user" component={UserFormComponent} />
          {/* <Route exact path="/users/:userId" component={UserTestComponent} /> */}
          <Route exact path='/users/:userId' component={UserShow} />

        </Switch>
      </Router>
    )
  }
}

export default App


