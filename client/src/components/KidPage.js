import React from 'react'
import KidList from './KidList'

import { UserPageContainer } from './styled-components/Containers'



const KidPage = (props) => {
    console.log("Rendering KidPage")
    console.log("users", props)
    return (
        <UserPageContainer>
           
                <KidList 
                activities={props.activities} 
                showKid = {props.showKid} 
                getActivities={props.getActivities} 
                kids={props.kids} 
                getOneKid = {props.getOneKid} 
                userId = {props.userId} 
                kid={props.kid} 
                showKids = {props.showKids}/>
          
        </UserPageContainer>
    )
}




export default KidPage