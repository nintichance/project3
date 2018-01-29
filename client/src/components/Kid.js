import React from 'react'
import { Link } from 'react-router-dom'


import { UserContainer } from './styled-components/Containers'
import { Button } from './styled-components/Button'

import { Image } from './styled-components/Images'
import NavBar from './NavBar'


const Kid = (props) => {
 
   const getOneKid = (event) => {
        event.preventDefault()
        console.log("CLICKEDHERE!!!")
        props.getOneKid(props.userId, props.kidId)
    }

    return (
        
        <UserContainer>
           
                <NavBar />
                <Image src={props.img} alt="Placeholder User" />
                <button onClick={() => {this.getOneKid}}>View Kid</button>

                {/* WHY ISN'T THE Button BELOW TAKING YOU BACK? */}
                <Link to={`users/${props.userId}`}><Button>Go Back</Button></Link>
                <Link to={`users/${props.userId}/kids/${props.kidId}`}><Button onClick={this.getOneKid}>Kid Page</Button></Link>
         
        </UserContainer>
    )

}

export default Kid