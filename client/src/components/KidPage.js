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
           
                <KidList kids={props.kids} getOneKid = {props.getOneKid} userId = {props.userId} kid={props.kid} showKids = {props.showKids}/>
          
        </UserPageContainer>
    )
}




export default KidPage