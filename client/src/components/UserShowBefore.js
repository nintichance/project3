// import React, { Component } from 'react'
// import { Link, Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
// import { getUser, deleteUser, editUser } from '../actions/thunk.actions.js'



// import { UserShowContainer } from './styled-components/Containers'
// import { Button } from './styled-components/Button'
// import KidPage from './KidPage'
// import NavBar from './NavBar'
// import { UserShowImageContainer, IconContainer } from './styled-components/Images'
// import { HOne } from './styled-components/HeaderFont'
// import { Nav } from './styled-components/Nav'


// import UserEdit from './UserEdit'

// class UserShow extends Component {

//     constructor() {
//         super()
//         this.defaultState = {
//             redirectToUsers: false,
//             showKids: false,
//             showEdit: false,
//             showKid: false
//         }
//         // this.getOneKid = this.getOneKid.bind(this)
//         // this.getActivities = this.getActivities.bind(this)
//         // this.updateUser = this.updateUser.bind(this)
//         this.state = { ...this.defaultState }
//     }

//     componentWillMount() {
//         this.props.getUser()
//         // this.getKidData()
//     }

//     redirectToUsers = () => {
//         this.setState({ redirectToUsers: true })
//     }

//     // async deleteUser(userId) {
//     //     try {
//     //         console.log('DELETE', userId)
//     //         await axios.get('/api/users/' + userId + '/delete')
//     //         this.redirectToUsers()
//     //         window.location.reload()

//     //     }
//     //     catch (err) {
//     //         console.log(err)
//     //     }
//     // }

//     // async updateUser(userId, updatedUser) {
//     //     try {
//     //         console.log('EDIT', userId)
//     //         console.log("UPDATED USEr", updatedUser)
//     //         await axios.patch(`/api/users/${userId}`, { updatedUser })
//     //         this.setState({ user: updatedUser })
//     //     }
//     //     catch (err) {
//     //         console.log(err)
//     //     }
//     // }

//     // async getKidData() {
//     //     try {
//     //         const userId = this.props.match.params.userId
//     //         const res = await axios.get(`/api/users/${userId}/kids`)
//     //         const kids = res.data
//     //         this.setState({ kids })
//     //     }
//     //     catch (err) {
//     //         console.log(err)
//     //     }
//     // }
//     // async getOneKid(userId, kidId) {
//     //     console.log("CLICKED!")
//     //     console.log("HEREHRE", userId, kidId)
//     //     try {
//     //         const res = await axios.get(`/api/users/${userId}/kids/${kidId}`)
//     //         console.log("MEEEE", res)
//     //         const kid = res.data
//     //         console.log('KIDINFO', kid)
//     //         this.setState({ kid: kid, showKid: true })
//     //     }
//     //     catch (err) {
//     //         console.log(err)
//     //     }
//     // }

//     showKids = () => {
//         this.setState({ showKids: true })
//     }
//     //Show User Edit Form
//     showEdit = () => {
//         this.setState({ showEdit: true })
//     }

//     render() {
//         console.log(this.props.user)
//         const userId = this.props.match.params.userId
//         //Allows Each Component Nested within UserShow to Show Independently        
//         let userCondition
//         if (this.state.redirectToUsers === true) {
//             userCondition = <Redirect to="/users">Users</Redirect>
//         } else if (this.state.showKids === true) {
//             userCondition = <KidPage
//                 user = {this.props.user}
//                 // activities="Nothing"
//                 // kids={this.state.kids}
//                 // getActivities="testing"
//                 // getOneKid={this.getOneKid}
//                 // userId={this.props.match.params.userId}
//                 // kid={this.state.kid}
//                 // showKids={this.state.showKids}
//                 // showKid={this.state.showKid}
//             />

//         } else if (this.state.showEdit === true) {
//             userCondition = <UserEdit user={this.props.user} userId={this.props.match.params.userId} editUser={this.props.editUser} />
//         } else {
//             userCondition =
//                 <div>
//                     <NavBar />
//                     <div> <HOne>{this.props.user} {this.props.user}</HOne></div>
//                     <UserShowImageContainer>
//                         <img src={this.props.user} alt="User" />
//                         <IconContainer>
//                             <img src="https://i.imgur.com/mhDL1HQ.png" onClick={() => { this.props.deleteUser(this.props.match.params.userId) }} />
//                             <br />
//                             <img src="https://i.imgur.com/4Llf474.png" onClick={this.showEdit} />
//                             <br />
//                             <Link to="/users"><img src="https://i.imgur.com/JUcXJiy.png" /></Link>
//                         </IconContainer>
//                     </UserShowImageContainer>
//                     <Link to="/new-kid"><Button>New Kid</Button></Link>
//                     <Link to={`/users/${this.props.match.params.userId}/kids`}><Button onClick={this.showKids}>Kids</Button></Link>
//                 </div>
//         }

//         return (
//             <UserShowContainer>
//                 {userCondition}
//             </UserShowContainer>
//         )
//     }
// }

// const mapStateToProps = (state, ownProps) => {
//     return { user: state.users.find(u => u._id === ownProps.userId) }
// }

// //does this have anything to do with map function?
// export default connect(mapStateToProps, { push, getUser, deleteUser })(UserShow)
