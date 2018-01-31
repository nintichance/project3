import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItems } from './styled-components/Nav'

const NavBar = (props) =>{

return(
    <Nav>
        <NavItems>
         <Link to="/"><img src="https://i.imgur.com/B5lSqBm.png?1" alt="Home"/></Link>
          <Link to="/users"><img src="https://i.imgur.com/bgEh0IF.png?1" alt="Users"/></Link>
          <Link to="/new-user"><img src="https://i.imgur.com/ncUJdHD.png?1" alt="Add a User"/></Link>
        </NavItems>
    </Nav>
)

}




export default NavBar


