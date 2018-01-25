import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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

    // async deleteUser(){
    //     try{
    //         const userId = this.props.match.params.userId
    //         await axios.delete(`/api/users/${userId}/delete`)
    //         this.setState({user: this.defaultState})
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    
    //1:11AM I was trying to get both my delete and my edit routes working!!!
    async updateUser(user, e) {
        try{
            const userId = this.props.match.params.userId
            console.log('PIOEJ', userId)
            await axios.patch(`/api/users/${userId}/edit`, {user})
            this.setState({user})
        }
        catch(err){
           console.log(err)
        }
    }

    
    render(){ 
        return (
            <div>
                <div>
                    Hello from UserShow!
                    <div><img src={this.state.user.img} alt="User"/></div>
                    <div>Name: {this.state.user.firstName} {this.state.user.name}</div>
                    <div><button onClick ={this.deleteUser}>Delete User</button></div>
                    <div><button onClick={this.updateUser}>Edit User</button></div>
                    <Link to="/users"><button>Go Back</button></Link>
                </div>
            </div>
        )
}
   
}




export default UserShow