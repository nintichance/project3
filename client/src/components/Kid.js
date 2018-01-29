import React from 'react'
import { Link } from 'react-router-dom'


import { UserContainer } from './styled-components/Containers'
import { Button } from './styled-components/Button'

import { Image } from './styled-components/Images'
import NavBar from './NavBar'
import KidShow from './KidShow'


const Kid = (props) => {
    console.log("ACT4444", props.activities)
    console.log("TRUE", props.userId, props.kidId, props.index)
   const getOneKid = (event) => {
        event.preventDefault()
        console.log("CLICKEDHERE!!!")
        props.getOneKid(props.userId, props.kidId)
        // props.getActivities(props.userId, props.kidId, props.index)
        console.log("YAY", props.kid)
    }

    return (
        
        <UserContainer>
            {props.showKid ?  <KidShow {...props}/> : null}
             <NavBar />
                <Image src={props.img} alt="Placeholder User" />
                <Button onClick={getOneKid}>View Kid</Button>

         {/* WHY ISN'T THE Button BELOW TAKING YOU BACK?  */}
                <Link to={`users/${props.userId}`}><Button>Go Back</Button></Link>
                <Link to={`users/${props.userId}/kids/${props.kidId}`}><Button onClick={this.getOneKid}>Kid Page</Button></Link>
            
        </UserContainer>

    )

}

export default Kid