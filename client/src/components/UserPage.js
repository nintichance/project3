import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getUsers } from '../actions/thunk.actions.js'

import UserList from './UserList'
import { UserPageContainer } from './styled-components/Containers'
import NavBar from './NavBar'

class UserPage extends Component {
    componentWillMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <UserPageContainer>
                <NavBar />
                <div>
                    <UserList users={this.props.users} user = {this.props.user}/>
                </div>
            </UserPageContainer>
        )

    }
}



const mapStateToProps = (state) => {
    return { users: state.users }
}

//does this have anything to do with map function?
export default connect(mapStateToProps, { push, getUsers })(UserPage)
//the parameters above are the actions being called
//monad in JS, you can call a function and if it returns a function, you can immediately invoke the function that it 
//returns and UserPage is the parameter of the function that is returned
//recursion is when you call a function inside itself
//polymorphism is when you have a class (inside itself?)


