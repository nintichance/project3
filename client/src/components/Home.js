import React from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer } from './styled-components/Containers'
import { HomeHeader, HomeDescription } from './styled-components/HeaderFont'
import NavBar from './NavBar'



const Home = () => {
    return(
        <HomeContainer>
            <NavBar />
            <HomeHeader>sat</HomeHeader>
            <HomeDescription>The babysitting app that lets you keep track of your kids' schedules!</HomeDescription>
            <br/>
            <br/>
            <Link to='/new-user'>New User</Link>
            
        </HomeContainer>
    )
}



export default Home