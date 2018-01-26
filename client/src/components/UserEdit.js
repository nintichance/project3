import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'

import { UserFormContainer } from './styled-components/Containers'


class UserForm extends Component {
    constructor(props) {
        super(props)
        this.defaultState = {
            newUser: {
                firstName: 'Eric',
                lastName: 'Lu',
                img: 'https://i.imgur.com/KIiCMv3.jpg'
            },
            redirect: false
        }
        this.state = { ...this.defaultState }
        console.log(`FORM STATE:`, this.state.newUser)
    }





    //REDIRECT TO USERS PAGE
    render() {
        return (
            <UserFormContainer>
                Hello from UserForm
                {this.state.redirect ? <Redirect to="/users">Users</Redirect> :
                <form onSubmit={this._addNewUser}>
                    <div>
                        <span>New User </span>
                        <input
                            type="string"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.newUser.firstName}
                            onChange={this.handleInputChange} />
                    </div>

                    <div>
                        
                        <input
                            type="string"
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.newUser.lastName}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <input
                            type="string"
                            name="img"
                            placeholder="Image URL"
                            value={this.state.newUser.img}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Add New User" />
                    </div>
                    <div>
                    <button><Link to="/users">Back</Link></button>
                    </div>
                </form>}
            </UserFormContainer>
        )

    }
}

export default UserForm