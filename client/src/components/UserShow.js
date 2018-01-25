import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styled from 'styled-components'
import { UserShowContainer } from './styled-components/Containers'

class UserShow extends Component {

    constructor() {
        super()
        this.defaultState = {
            user: {}
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
        console.log('BOOP', this.defaultState)
        this.setState(user)
        }
        catch(err){
            console.log(err)
        }
        
    }

    async deleteUser(userId){
        try{
            console.log('DELETE', userId)
            await axios.delete(`/api/users/${userId}/delete`)
            this.setState({user: this.defaultState})
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
                <div>
                    Hello from UserShow!
                    <div><img src={this.state.user.img} alt="User"/></div>
                    <div>Name: {this.state.user.firstName} {this.state.user.name}</div>
                    <div><button onClick ={() => {this.deleteUser(this.props.match.params.userId)}}>Delete User</button></div>
                    <div><button onClick={() => this.updateUser(this.props.match.params.userId)}>Edit User</button></div>
                    <Link to="/users"><button>Go Back</button></Link>
                </div>
            </UserShowContainer>
        )
}
   
}




export default UserShow