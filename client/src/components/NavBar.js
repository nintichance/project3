import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) =>{

return(
    <div>
        Hello from NavBar
         <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/new-user">New User</Link>
          {/* <Route to="/users/:userId" UserTest>Here</Link> */}
          {/* <Link to='/users/:userId' >Here</Link>
          <Link to='/users/:userId/kids'>Here</Link> */}
        {/* Home
        New User
        About
        New Kid (Only display if on User Page and Kids Page)
        New Activity (Only display if on Kid Page and Activity Page) */}
    </div>
)

}




export default NavBar