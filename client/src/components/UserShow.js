import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import { UserShowContainer } from './styled-components/Containers'
import KidPage from './KidPage'
import NavBar from './NavBar'

class UserShow extends Component {


    constructor() {
        super()
        this.defaultState = {
            user: {},
            kids: [],
            kid: {},
            redirect: false,
            showKids: false
        }
        this.state = { ...this.defaultState }
    }

    componentWillMount() {
        this.getUserInfo()
        this.getKidData()
    }

    async getUserInfo() {
        try {
            const userId = this.props.match.params.userId
            console.log('ID', userId)
            const res = await axios.get(`/api/users/${userId}`)
            const user = res.data
            console.log('USERINFO', user)

            this.setState(user)
        }
        catch (err) {
            console.log(err)
        }

    }

    redirectToUser = () => {
        this.setState({ redirect: true })
    }

    async deleteUser(userId) {
        try {
            console.log('DELETE', userId)
            await axios.get('/api/users/' + userId + '/delete')
            this.redirectToUser()



        }
        catch (err) {
            console.log(err)
        }
    }

    //1:11AM I was trying to get both my delete and my edit routes working!!! 
    async updateUser(userId) {
        try {
            console.log('EDIT', userId)
            // await axios.patch(`/api/users/${userId}/edit`, {user})
            // this.setState({user})
            // event.preventDefault()
        }
        catch (err) {
            console.log(err)
        }
    }
    //GET, POST, PATCH, DELETE Kid's Information

    async getKidData() {
        try {
            const userId = this.props.match.params.userId
            const res = await axios.get(`/api/users/${userId}/kids`)
            const kids = res.data
            this.setState({ kids })
        }
        catch (err) {
            console.log(err)
        }
    }
    async getOneKid(userId, kidId) {
        console.log("CLICKED!")
        try {
            const res = await axios.get(`/api/users/${userId}/kids/${kidId}`)
            const kid = res.data
            console.log('KIDINFO', kid)

            this.setState(kid)
        }
        catch (err) {
            console.log(err)
        }

    }
    //Show Kids Component Only
    showKids = () => {
        this.setState({ showKids: true })
    }


    render() {


        return (
            <UserShowContainer>

                {this.state.redirect ? <Redirect to="/users">Users</Redirect> : null}
                {this.state.showKids ? <KidPage kids={this.state.kids} getOneKid={this.getOneKid} userId={this.props.match.params.userId} kid={this.state.kid} showKids={this.state.showKids} /> :
                    <div>
                        <NavBar />
                        Hello from UserShow!

                    <div><img src={this.state.user.img} alt="User" /></div>
                        <div>Name: {this.state.user.firstName} {this.state.user.name}</div>
                        <div><button onClick={() => { this.deleteUser(this.props.match.params.userId) }}>Delete User</button></div>
                        <div><button onClick={() => this.updateUser(this.props.match.params.userId)}>Edit User</button></div>
                        <Link to="/users"><button>Go Back</button></Link>
                        <Link to="/new-kid"><button>New Kid</button></Link>
                        <Link to={`/users/${this.props.match.params.userId}/kids`}><button onClick={this.showKids}>Kids</button></Link>
                    </div>
                }
            </UserShowContainer>
        )

    }

}




export default UserShow