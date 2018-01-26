import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import styled from 'styled-components'
import { UserShowContainer } from './styled-components/Containers'

class UserTest extends Component {

    componentWillMount(){
        this._getUserInfo()
    }

   _getUserInfo = () => {    
        const userId = this.props.match.params.userId
        this.getUserInfo(userId)
    }
    
    // redirectToUser = ()=> {
    //     this.setState({redirect:true})
    // }

    // async deleteUser(userId){
    //     try{
    //         console.log('DELETE', userId)
    //         await axios.get('/api/users/' +userId+ '/delete')
    //         this.redirectToUser()
       


    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    
    // //1:11AM I was trying to get both my delete and my edit routes working!!! 
    // async updateUser(userId) {
    //     try{
    //         console.log('EDIT', userId)
    //         // await axios.patch(`/api/users/${userId}/edit`, {user})
    //         // this.setState({user})
    //        // event.preventDefault()
    //     }
    //     catch(err){
    //        console.log(err)
    //     }
    // }

    render(){
        return (
        <UserShowContainer>
            <div>
                Hello from UserShow!
                <div><img src={this.props.user.img} alt="User"/></div>
                <div>Name: {this.props.user.firstName} {this.state.user.name}</div>
                <div><button onClick ={() => {this.deleteUser(this.props.match.params.userId)}}>Delete User</button></div>
                <div><button onClick={() => this.updateUser(this.props.match.params.userId)}>Edit User</button></div>
                <Link to="/users"><button>Go Back</button></Link>
            </div>
        </UserShowContainer>
)
    }

         
}




export default UserTest