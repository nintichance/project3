import React from 'react'
import UserList from './UserList'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { UserPageContainer } from './styled-components/Containers'


const UserPage = (props) => {
    // console.log(props.users)
    return (
        <UserPageContainer>
            Hello from UserPage
            <div>
                <Link to="/new-user">New User </Link>
            </div>
            <div>
                <UserList users={props.users} />
            </div>
        </UserPageContainer>
    )
}




export default UserPage