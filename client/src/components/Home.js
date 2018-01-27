import React from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer } from './styled-components/Containers'
import NavBar from './NavBar'



const Home = () => {
    return(
        <HomeContainer>
            <NavBar />
            Hello from Home
            <Link to='/users'>Users</Link>
        </HomeContainer>
    )
}



export default Home