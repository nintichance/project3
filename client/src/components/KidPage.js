import React from 'react'
import KidList from './KidList'
import { Link } from 'react-router-dom'
//import styled from 'styled-components'

import { UserPageContainer } from './styled-components/Containers'



const KidPage = (props) => {
    console.log('KIDS', props.kids, props.kid)
    console.log("GETONEKID", props.getOneKid)
    return (
        <UserPageContainer>
            Hello from KidPage
            <div>
                <Link to="/new-kid">New Kid </Link>
            </div>
            <div>
                <KidList kids={props.kids} getOneKid = {props.getOneKid} userId = {props.userId} kid={props.kid} showKids = {props.showKids}/>
            </div>
        </UserPageContainer>
    )
}




export default KidPage