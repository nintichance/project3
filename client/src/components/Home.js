import React from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer } from './styled-components/Containers'



const Home = () => {
    return(
        <HomeContainer>
            Hello from Home
            <Link to='/users'>Users</Link>
        </HomeContainer>
    )
}



export default Home