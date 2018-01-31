import React from 'react'

import { UserShowContainer } from './styled-components/Containers'

import Kid from './Kid'

const KidList = (props) => {

    const kidList = props.kids.map((kid, index) => {
        return (
            <Kid
                activities={props.activities}
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
        <UserShowContainer>
            {kidList}
        </UserShowContainer>
    )
}



export default KidList