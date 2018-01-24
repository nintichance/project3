import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div>
            Hello from Home
            <Link to='/users'>Users</Link>
        </div>
    )
}



export default Home