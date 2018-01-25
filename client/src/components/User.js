import React from 'react'
import { Link } from 'react-router-dom'

const User = (props) => {

    return (
        <div>
            <h1>Hello from {props.firstName}</h1>
            <img src={props.img} alt = "Placeholder User"/>
             <Link to={`users/${props.userId}`}><button>User</button></Link>
        </div>
    )
    
}

export default User