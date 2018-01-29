import React from 'react'
import { Link } from 'react-router-dom'


import { UserContainer } from './styled-components/Containers'
import { Button } from './styled-components/Button'
import { HTwo} from './styled-components/HeaderFont'

import { Image } from './styled-components/Images'
import NavBar from './NavBar'
import Activity from './Activity'


const KidShow = (props) => {
 console.log("ACT55555", props.kid.activities)
    return (
        
        <UserContainer>
         <div><img src={props.kid.img} alt="User" /></div>
        <div><HTwo>Child: {props.kid.firstName} {props.kid.lastName}</HTwo></div> 
        <div><HTwo>Babysit On: {props.kid.schedule}</HTwo></div>
        <div><HTwo>School: {props.kid.school}</HTwo></div>
        <div><HTwo>Remember!: {props.kid.description}</HTwo></div>
        <div><HTwo>Diet: {props.kid.diet}</HTwo></div>
        <div><HTwo>Pay: {props.kid.payRate}</HTwo></div>
        <div><HTwo>Parents: {props.kid.parentTwo}{props.kid.parentOne}</HTwo></div>
        <div><HTwo>Contact Parents: {props.kid.parentTwoContacts}{props.kid.parentOneContacts}</HTwo></div>
        <div><HTwo>Emergency Contact: {props.kid.emergencyName}</HTwo></div>
        <div><HTwo>Emergency Contact Relationship: {props.kid.emergencyRelation}</HTwo></div>
        <div><HTwo>Emergency Contact Number: {props.kid.emergencyContact}</HTwo></div>
        {/* <div><Button onClick={() => { this.deleteUser(this.props.match.params.userId) }}>Delete User</Button></div> */}
       
         <Activity activities = {props.kid.activities}/>
        </UserContainer>
    )

}

export default KidShow