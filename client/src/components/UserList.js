import React from 'react'
import User from './User'

import { UserListContainer } from './styled-components/Containers'


const UserList = (props) =>{

    
 const userList = props.users.map((user, index)=>{
     console.log("KIDDD333", props.kid)
        return (  
            <User
            firstName={user.firstName}
            lastName={user.lastName}
            img={user.img}
            key={index}
            userId={user._id}
            /> 
        )
    })
    return (
        <UserListContainer>
            {userList}
        </UserListContainer>
    )
}



export default UserList