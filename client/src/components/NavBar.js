import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './styled-components/Nav'

const NavBar = (props) =>{

return(
    <Nav>
        Hello from NavBar
         <Link to="/"><img src="https://i.imgur.com/B5lSqBm.png?1" alt="Home"/></Link>
          <Link to="/users"><img src="https://i.imgur.com/bgEh0IF.png?1" alt="Users"/></Link>
          <Link to="/new-user"><img src="https://i.imgur.com/ncUJdHD.png?1" alt="Add a User"/></Link>
          {/* <Route to="/users/:userId" UserTest>Here</Link> */}
          {/* <Link to='/users/:userId' >Here</Link>
          <Link to='/users/:userId/kids'>Here</Link> */}
        {/* Home
        New User
        About
        New Kid (Only display if on User Page and Kids Page)
        New Activity (Only display if on Kid Page and Activity Page) */}
    </Nav>
)

}




export default NavBar