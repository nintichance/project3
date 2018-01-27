// import React, { Component } from 'react'
// import { Link, Redirect } from 'react-router-dom'
// import axios from 'axios'

// import styled from 'styled-components'
// import { UserShowContainer } from './styled-components/Containers'
// import KidPage from './KidPage'

// const KidShow = () => {

//     return (
//         <UserShowContainer>
//             {this.state.redirect ? <Redirect to="/users">Users</Redirect> :
//                 <div>
//                     Hello from UserShow!
//                     <KidPage kids={this.state.kids} />
//                     <div><img src={this.state.user.img} alt="User" /></div>
//                     <div>Name: {this.state.user.firstName} {this.state.user.name}</div>
//                     <div><button onClick={() => { this.deleteUser(this.props.match.params.userId) }}>Delete User</button></div>
//                     <div><button onClick={() => this.updateUser(this.props.match.params.userId)}>Edit User</button></div>
//                     <Link to="/users"><button>Go Back</button></Link>
//                     <Link to="/new-kid"><button>New Kid</button></Link>
//                 </div>
//             }
//         </UserShowContainer>
//     )

// }

// export default KidShow