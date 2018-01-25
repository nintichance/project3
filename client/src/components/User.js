import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { UserContainer } from './styled-components/Containers'


const User = (props) => {

    return (
        <UserContainer>
            <h1>Hello from {props.firstName}</h1>
            <img src={props.img} alt = "Placeholder User"/>
             <Link to={`users/${props.userId}`}><button>User</button></Link>
        </UserContainer>
    )
    
}

export default User