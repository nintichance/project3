import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getUser, deleteUser, editUser } from '../actions/thunk.actions.js'



import { UserShowContainer } from './styled-components/Containers'
import { Button } from './styled-components/Button'
import KidPage from './KidPage'
import NavBar from './NavBar'
import { UserShowImageContainer, IconContainer } from './styled-components/Images'
import { HOne } from './styled-components/HeaderFont'
import { Nav } from './styled-components/Nav'


import UserEdit from './UserEdit'

class UserShow extends Component {
    
    componentWillMount() {
        this.props.getUser(this.props.match.params.userId)
        console.log("USERID", this.props.user) 
    }
    

    render() {

        
               
        return (
            <UserShowContainer>
            <NavBar />
            <div> <HOne>{this.props.user} {this.props.user}</HOne></div>
            <UserShowImageContainer>
                <img src={this.props.user} alt="User" />
                <IconContainer>
                    <img src="https://i.imgur.com/mhDL1HQ.png" onClick={() => { this.props.deleteUser(this.props.match.params.userId) }} />
                    <br />
                    <img src="https://i.imgur.com/4Llf474.png" onClick={this.showEdit} />
                    <br />
                    <Link to="/users"><img src="https://i.imgur.com/JUcXJiy.png" /></Link>
                </IconContainer>
            </UserShowImageContainer>
            <Link to="/new-kid"><Button>New Kid</Button></Link>
            <Link to={`/users/${this.props.match.params.userId}/kids`}><Button onClick={this.showKids}>Kids</Button></Link>
        </UserShowContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps, { push, getUser, deleteUser })(UserShow)
