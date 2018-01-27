import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) =>{

return(
    <div>
         <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={UserComponent} />
          <Route exact path="/new-user" component={UserFormComponent} />
          {/* <Route exact path="/users/:userId" component={UserTestComponent} /> */}
          <Route exact path='/users/:userId' component={UserShow} />
          <Route exact path='/users/:userId/kids' component={KidPage} />
        {/* Home
        New User
        About
        New Kid (Only display if on User Page and Kids Page)
        New Activity (Only display if on Kid Page and Activity Page) */}
    </div>
)

}




export default NavBar