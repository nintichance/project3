import React, { Component } from 'react'
import axios from 'axios'

class UserShow extends Component {
    
    state = {
        user: {}
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