import React from 'react'
import UserList from './UserList'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

import { UserPageContainer } from './styled-components/Containers'


const UserPage = (props) => {


    return (
        <UserPageContainer>
            <NavBar />
            <div>
                <UserList users={props.users} />
            </div>
        </UserPageContainer>
    )
}




export default UserPage