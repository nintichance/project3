import React from 'react'

import {HOne, HTwo} from './styled-components/HeaderFont'

const Activity = (props) =>{


    return(
        <div>
            <HOne>ACTIVITIES</HOne>
           <div><HTwo>Activity: {props.activities[0].subject}</HTwo></div>
           <div><HTwo>Start Time: {props.activities[0].startTime}</HTwo></div>
           <div><HTwo>End Time: {props.activities[0].endTime}</HTwo></div>
           <div><HTwo>Location: {props.activities[0].location}</HTwo></div>
           <div><HTwo>Contact Name: {props.activities[0].contactName}</HTwo></div>
           <div><HTwo>Contact Number: {props.activities[0].contactNumber}</HTwo></div>
        </div>
    )
}




export default Activity