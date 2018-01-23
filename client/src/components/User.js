import React from 'react'

const User = (props) => {

    return (
        <div>
            <h1>Hello from {props.firstName}</h1>
            <img src={props.img} alt = "Placeholder User"/>
        </div>
    )
    
}

export default User