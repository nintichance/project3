import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import styled from 'styled-components'
import { UserShowContainer } from './styled-components/Containers'

class UserShow extends Component {


    constructor() {
        super()
        this.defaultState = {
            user: {},
            redirect: false
        }
        this.state = { ...this.defaultState }
    }

    componentWillMount(){
        this.getUserInfo()
    }

    async getUserInfo() {
        try{
        const userId = this.props.match.params.userId
        console.log('ID', userId)
        const res = await axios.get(`/api/users/${userId}`)
        const user = res.data
        console.log('USERINFO', user)
        
        this.setState(user)
        }
        catch(err){
            console.log(err)
        }
        
    }

    redirectToUser = ()=> {
        this.setState({redirect:true})
    }

    async deleteUser(userId){
        try{
            console.log('DELETE', userId)
            await axios.get('/api/users/' +userId+ '/delete')
            this.redirectToUser()
       


        }
        catch(err){
            console.log(err)
        }
    }
    
    //1:11AM I was trying to get both my delete and my edit routes working!!! 
    async updateUser(userId) {
        try{
            console.log('EDIT', userId)
            // await axios.patch(`/api/users/${userId}/edit`, {user})
            // this.setState({user})
           // event.preventDefault()
        }
        catch(err){
           console.log(err)
        }
    }

    
    render(){ 


        return (
            <UserShowContainer>
                {this.state.redirect ? <Redirect to="/users">Users</Redirect> :
                    <div>
                    Hello from UserShow!
                    <div><img src={this.state.user.img} alt="User"/></div>
                    <div>Name: {this.state.user.firstName} {this.state.user.name}</div>
                    <div><button onClick ={() => {this.deleteUser(this.props.match.params.userId)}}>Delete User</button></div>
                    <div><button onClick={() => this.updateUser(this.props.match.params.userId)}>Edit User</button></div>
                    <Link to="/users"><button>Go Back</button></Link>
                </div>
                }
            </UserShowContainer>
        )
    
}
   
}




export default UserShow