import React from 'react'
import { Link } from 'react-router-dom'


import { UserContainer } from './styled-components/Containers'
import { Button } from './styled-components/Button'
import { HTwo} from './styled-components/HeaderFont'

import { Image } from './styled-components/Images'
import NavBar from './NavBar'


const KidShow = (props) => {
    
 console.log("Kid55555", props.kid)
    return (
        
        <UserContainer>
         <div><img src={props.kid.img} alt="User" /></div>
        <div><HTwo>Child: {props.kid.firstName} {props.kid.lastName}</HTwo></div> 
        <div>Babysit On: {props.kid.schedule}</div>
        <div>School: {props.kid.school}</div>
        <div>Remember!: {props.kid.description}</div>
        <div>Diet: {props.kid.diet}</div>
        <div>Pay: {props.kid.payRate}</div>
        <div>Parents: {props.kid.parentTwo}{props.kid.parentOne}</div>
        <div>Contact Parents: {props.kid.parentTwoContacts}{props.kid.parentOneContacts}</div>
        <div>Emergency Contact: {props.kid.emergencyName}</div>
        <div>Emergency Contact Relationship: {props.kid.emergencyRelation}</div>
        <div>Emergency Contact Number: {props.kid.emergencyContact}</div>
        {/* <div><Button onClick={() => { this.deleteUser(this.props.match.params.userId) }}>Delete User</Button></div> */}
       
         
        </UserContainer>
    )

}

export default KidShow