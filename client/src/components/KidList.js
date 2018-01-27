import React from 'react'

import { UserListContainer } from './styled-components/Containers'

import Kid from './Kid'

const KidList = (props) => {


    const kidList = props.kids.map((kid, index) => {
        console.log(kid.firstName, kid._id)
        console.log("KIDSLIST", props.getOneKid)
        return (
            <Kid
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
                showKids = {props.showKids}/>
        )
    })
    return (
        <UserListContainer>
            {kidList}
        </UserListContainer>
    )
}



export default KidList