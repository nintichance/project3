import React from 'react'
import UserList from './UserList'
import { Link } from 'react-router-dom'
const UserPage = (props) => {
    // console.log(props.users)
    return (
        <div>
            Hello from UserPage
            <div>
                <Link to="/new-user">New User </Link>
            </div>
            <div>
                <UserList users={props.users} />
            </div>
        </div>
    )
}




export default UserPage