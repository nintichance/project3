import React from 'react'
import UserList from './UserList'
import UserForm from './UserForm'
const UserPage = (props) => {
    console.log(props.users)
    return(
        <div>
            Hello from UserPage
           
            <UserList users={props.users} />
            <UserForm />
        </div>
    )
}




 export default UserPage