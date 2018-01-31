import React from 'react'
import { Link } from 'react-router-dom'


import { OtherContainer } from './styled-components/Containers'
import { Button } from './styled-components/Button'

import { Image } from './styled-components/Images'
import NavBar from './NavBar'
import KidShow from './KidShow'


const Kid = (props) => {
    const getOneKid = (event) => {
        event.preventDefault()
        props.getOneKid(props.userId, props.kidId)
        // props.getActivities(props.userId, props.kidId, props.index)
    }


    return (
        <OtherContainer>
            {props.showKid ? <KidShow {...props} /> :
                <div>
                    <NavBar />
                    <Image src={props.img} alt="Placeholder User" />
                    <Button onClick={getOneKid}>View Kid</Button>
                </div>
            }
        </OtherContainer>

    )

}

export default Kid