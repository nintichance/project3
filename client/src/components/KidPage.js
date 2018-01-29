import React from 'react'
import KidList from './KidList'

import { UserPageContainer } from './styled-components/Containers'



const KidPage = (props) => {

    return (
        <UserPageContainer>
           
                <KidList kids={props.kids} getOneKid = {props.getOneKid} userId = {props.userId} kid={props.kid} showKids = {props.showKids}/>
          
        </UserPageContainer>
    )
}




export default KidPage