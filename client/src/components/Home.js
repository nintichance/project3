import React from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer } from './styled-components/Containers'
import NavBar from './NavBar'



const Home = () => {
    return(
        <HomeContainer>
            <NavBar />
            <h1>sat.app</h1>
            <Link to='/new-user'>New User</Link>
            <p>The babysitting app that lets you keep track of your kids' schedules!</p>
        </HomeContainer>
    )
}



export default Home