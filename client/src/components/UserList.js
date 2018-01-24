import React from 'react'
import User from './User'
const UserList = (props) =>{

    
 const userList = props.users.map((user, index)=>{
     console.log(user.firstName, user._id)
        return (  
            <User
            firstName={user.firstName}
            lastName={user.lastName}
            img={user.img}
            key={index}/> 
        )
    })
    return (
        <div>
            Hello From User List
            {userList}
        </div>
    )
}



export default UserList