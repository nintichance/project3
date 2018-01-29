import React from 'react'

import { UserListContainer } from './styled-components/Containers'

import Kid from './Kid'

const KidList = (props) => {

    console.log("EEEE", props.kid)
    const kidList = props.kids.map((kid, index) => {
        console.log("KIDD3333", props.kid)
        return (
            <Kid
                showKid = {props.showKid}
                getActivities = {props.getActivities}
                kid = {props.kid}
                getOneKid = {props.getOneKid}
                userId = {props.userId}
                age={kid.age}
                bedTime={kid.bedTime}
                description={kid.description}
                diet={kid.diet}
                emergencyContact={kid.emergencyContact}
                emergencyName={kid.emergencyName}
                emergencyRelation={kid.emergencyRelation}
                firstName={kid.firstName}
                img={kid.img}
                lastName={kid.lastName}
                parentOne={kid.parentOne}
                parentOneContact={kid.parentOneContact}
                parentTwo={kid.parentTwo}
                parentTwoContact={kid.parentTwoContact}
                payRate={kid.payRate}
                schedule={kid.schedule}
                school={kid.school}
                key={index}
                kidId={kid._id} 
                showKids = {props.showKids}
                index={props.index}/>
        )
    })
    return (
        <UserListContainer>
            {kidList}
        </UserListContainer>
    )
}



export default KidList