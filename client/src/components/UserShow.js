import React, { Component } from 'react'
import axios from 'axios'

class UserShow extends Component {

    constructor(props) {
        super(props)
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
        const res = await axios.get(`/api/users/${userId}`)
        const user = res.data
        console.log('USERINFO', user)
        this.setState(user)
        }
        catch(err){
            console.log(err)
        }
        
    }

    // createIdea = () => {
    //     axios.post(`/api/users/${this.state.user.id}/ideas`).then(res => {
    //       const newIdeas = [...this.state.ideas]
    //       newIdeas.unshift(res.data) //This will add the new Idea to the beginning of the array
    //       this.setState({ideas: newIdeas})
    //     })
    //   }

    // async deleteUser(){
    //     try{
    //         const userId = this.props.match.params.userId
    //         await axios.delete(`/api/users/${userId}/delete`)
    //         const updatedInfo = {...user}
    //         this.setState({user: updatedInfo})
    //     }
    // }

    
    render(){ 
        console.log(this.state.user.firstName)
        return (
            <div>
                <div>
                    Hello from UserShow!
                    <div><img src={this.state.user.img} alt="User"/></div>
                    <div>Name: {this.state.user.firstName} {this.state.user.name}</div>
                    <div><button>Delete User</button></div>
                </div>
            </div>
        )
}
   
}




export default UserShow