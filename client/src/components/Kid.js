import React from 'react'
import { Link } from 'react-router-dom'


import { UserContainer } from './styled-components/Containers'
import { Button } from './styled-components/Button'

import { Image } from './styled-components/Images'
import NavBar from './NavBar'


const Kid = (props) => {
    console.log('STUFF', props.emergencyContact)
    console.log("KIDSDSDS", props.getOneKid)

    const getOneKid = (userId, kidId) => {
        console.log("CLICKEDHERE!!!")
        props.getOneKid(userId, kidId)
    }

    return (
        <UserContainer>
           
                <NavBar />
                <Image src={props.img} alt="Placeholder User" />
                <Button onClick={() => { this.getOneKid() }}>Click it</Button>

                {/* WHY ISN'T THE Button BELOW TAKING YOU BACK? */}
                <Link to={`users/${props.userId}`}><Button>Go Back</Button></Link>
                <Link to={`users/${props.userId}/kids/${props.kidId}`}><Button onClick={this.getOneKid}>Kid Page</Button></Link>
         
        </UserContainer>
    )

}

export default Kid