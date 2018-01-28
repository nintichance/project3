import React from 'react'

const UserDelete = (props) => {


    const updateState = () =>{
        console.log("MECALLED2")
        this.props.stateChange()
    }
    if (props.redirect === true) {
        console.log("MECALLED1")
       this.updateState()
    }
    

    return(
        <div>
            Hello from User Delete
        </div>
    )

}

export default UserDelete