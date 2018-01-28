import React from 'react'
import { Link } from 'react-router-dom'


import { UserContainer } from './styled-components/Containers'
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
                <button onClick={() => { this.getOneKid() }}>Click it</button>

                {/* WHY ISN'T THE BUTTON BELOW TAKING YOU BACK? */}
                <Link to={`users/${props.userId}`}><button>Go Back</button></Link>
                <Link to={`users/${props.userId}/kids/${props.kidId}`}><button onClick={this.getOneKid}>Kid Page</button></Link>
         
        </UserContainer>
    )

}

export default Kid