import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Home = () => {
    return(
        <div>
            Hello from Home
            <Link to='/users'>Users</Link>
        </div>
    )
}



export default Home