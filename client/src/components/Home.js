import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeStyle = styled.div`
  display: grid;
  justify-items: center;
  background-color: gray;
`

const Home = () => {
    return(
        <HomeStyle>
            Hello from Home
            <Link to='/users'>Users</Link>
        </HomeStyle>
    )
}



export default Home