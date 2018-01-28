import React from 'react'
import { Container } from './styled-components/Containers'
import UserShow from './UserShow'
import { Nav } from './styled-components/Nav'
import { Link } from 'react-router-dom'

const UserShowNavBar = (props) =>{

return(
    <div>
    <Nav>
        <UserShow />
        Hello from UserShowNavBar
         <Link to="/"><img src="https://i.imgur.com/B5lSqBm.png?1" alt="Home"/></Link>
          <Link to="/users"><img src="https://i.imgur.com/bgEh0IF.png?1" alt="Users"/></Link>
          <Link to="/new-user"><img src="https://i.imgur.com/ncUJdHD.png?1" alt="Add a User"/></Link>
       
    </Nav>
    <UserShow />
    </div>
)

}




export default UserShowNavBar