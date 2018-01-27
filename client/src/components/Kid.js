import React from 'react'
import { Link } from 'react-router-dom'


import { UserContainer } from './styled-components/Containers'
import { Image } from './styled-components/Images'



const Kid = (props) => {
    console.log('STUFF', props.emergencyContact)
    console.log("KIDSDSDS", props.getOneKid)

    const getOneKid = (userId, kidId) => {
        console.log("CLICKEDHERE!!!")
        props.getOneKid(userId, kidId)
    }

    return (
        <UserContainer>
            <div>
                <Image src={props.img} alt="Placeholder User" />
                <button onClick={() => { this.getOneKid }}>Click it</button>
                <Link to={`users/${props.userId}/kids/${props.kidId}`}><button onClick={this.getOneKid}>Kid Page</button></Link>
            </div>    
        </UserContainer>
    )

}

export default Kid