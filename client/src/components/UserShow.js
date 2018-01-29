import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import { UserShowContainer } from './styled-components/Containers'
import { Button } from './styled-components/Button'
import KidPage from './KidPage'
import { UserShowImageContainer, IconContainer} from './styled-components/Images'
import { HOne } from './styled-components/HeaderFont'


import UserEdit from './UserEdit'

class UserShow extends Component {


    constructor() {
        super()
        this.defaultState = {
            user: {},
            kids: [],
            kid: {},
            activities: [],
            redirect: false,
            showKids: false,
            showEdit: false,
            showKid: false
        }
        this.getOneKid = this.getOneKid.bind(this)
        this.getActivities = this.getActivities.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.state = { ...this.defaultState }
    }

    componentWillMount() {
        this.getUserInfo()
        this.getKidData()

    }


    async getUserInfo() {
        try {
            const userId = this.props.match.params.userId
            console.log('ID', userId)
            const res = await axios.get(`/api/users/${userId}`)
            const user = res.data
            console.log('USERINFO', user)

            this.setState(user)
        }
        catch (err) {
            console.log(err)
        }

    }

    redirectToUser = () => {
        this.setState({ redirect: true })
    }

    async deleteUser(userId) {
        try {
            console.log('DELETE', userId)
            await axios.get('/api/users/' + userId + '/delete')
            this.redirectToUser()
            window.location.reload()

        }
        catch (err) {
            console.log(err)
        }
    }


    async updateUser(userId, updatedUser) {
        try {
            console.log('EDIT', userId)
            console.log("UPDATED USEr", updatedUser)
            await axios.patch(`/api/users/${userId}`, { updatedUser })
            this.setState({ user: updatedUser })
        }
        catch (err) {
            console.log(err)
        }
    }
    //GET Kid's Information

    async getKidData() {
        try {
            const userId = this.props.match.params.userId
            const res = await axios.get(`/api/users/${userId}/kids`)
            const kids = res.data
            this.setState({ kids })
        }
        catch (err) {
            console.log(err)
        }
    }

    async getOneKid(userId, kidId) {
        console.log("CLICKED!")
        console.log("HEREHRE", userId, kidId)
        try {
            const res = await axios.get(`/api/users/${userId}/kids/${kidId}`)
            console.log("MEEEE", res)
            const kid = res.data
            console.log('KIDINFO', kid)
            this.setState({ kid: kid, showKid: true })
        }
        catch (err) {
            console.log(err)
        }
    }

    //GET activities
    async getActivities(userId, kidId) {
        try {
            console.log("DID IT", userId, kidId)

            const res = await axios.get(`/api/users/${userId}/kids/${kidId}/activities`)
            const activities = res.data
            console.log("WOAH", activities)
            this.setState({ activities })
        }
        catch (err) {
            console.log(err)
        }
    }


    //Show Kids Component Only
    showKids = () => {
        this.setState({ showKids: true })
    }
    //Show User Edit Form
    showEdit = () => {
        this.setState({ showEdit: true })
    }


    render() {
        console.log("KIDDDD", this.state.kid)
        let userCondition
        if (this.state.redirect === true) {
            userCondition = <Redirect to="/users">Users</Redirect>
        } else if (this.state.showKids === true) {
            userCondition = <KidPage kids={this.state.kids} getActivities={this.getActivities} getOneKid={this.getOneKid} userId={this.props.match.params.userId} kid={this.state.kid} showKids={this.state.showKids} showKid={this.state.showKid} />

        } else if (this.state.showEdit === true) {
            userCondition = <UserEdit user={this.state.user} userId={this.props.match.params.userId} updateUser={this.updateUser} />
        } else {
            userCondition =
            <div>
                <div> <HOne>{this.state.user.firstName} {this.state.user.lastName}</HOne></div>
                <UserShowImageContainer>
                    <img src={this.state.user.img} alt="User" />
                    <IconContainer>
                        <img src="https://i.imgur.com/mhDL1HQ.png" onClick={() => { this.deleteUser(this.props.match.params.userId) }} />
                        <br/>
                        <img src="https://i.imgur.com/4Llf474.png" onClick={this.showEdit} />
                        <br/>
                        <Link to="/users"><img src="https://i.imgur.com/JUcXJiy.png" /></Link>

                    </IconContainer>
                </UserShowImageContainer>
                <Link to="/new-kid"><Button>New Kid</Button></Link>
                <Link to={`/users/${this.props.match.params.userId}/kids`}><Button onClick={this.showKids}>Kids</Button></Link>
            </div>
        }

        return (
            <UserShowContainer>
                {userCondition}
            </UserShowContainer>
        )
    }
}




export default UserShow