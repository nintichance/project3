import React from 'react'
import UserList from './UserList'

const UserPage = (props) => {
    console.log(props.users)
    return(
        <div>
            Hello from UserPage
           
            <UserList users={props.users} />
            
        </div>
    )
}




 export default UserPage