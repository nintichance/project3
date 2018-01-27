import React from 'react'
import { Link } from 'react-router-dom'

import { UserContainer } from './styled-components/Containers'
import { Image } from './styled-components/Images'


const User = (props) => {

    return (
        <UserContainer>
            <div>
            {/* <h1>Hello from {props.firstName}</h1> */}
             <Link to={`users/${props.userId}`}> <Image src={props.img} alt = "Placeholder User"/></Link>
             </div>
        </UserContainer>
    )
    
}

export default User