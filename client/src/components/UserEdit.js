import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { UserFormContainer } from './styled-components/Containers'
import { FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton} from './styled-components/Form'

import axios from 'axios'

class UserEdit extends Component {
    constructor(props) {
        super(props)
        this.defaultState = {
            updatedUser: {
                firstName: 'Eric',
                lastName: 'Lu',
                img: 'https://i.imgur.com/KIiCMv3.jpg'
            },
            redirect: false
        }
        this.state = { ...this.defaultState }
        console.log(`FORM STATE:`, this.state.updatedUser)
    }
    handleInputChange = (event) => {
        console.log("IN HANDLECHANGE")
        const attribute = event.target.name
        let value = event.target.value
        console.log("ATTRIBUTE", attribute, "VALUE", value)
        const updatedUser = {...this.state.updatedUser}
        updatedUser[attribute] = value
        this.setState({updatedUser})
    }

    resetForm = () => {
        const updatedUser = {...this.defaultState.updatedUser}
        this.setState({updatedUser, redirect: true})
    }

    updateUser = (event) =>{
        event.preventDefault()
        this.props.updateUser(this.props.userId, this.state.updatedUser)
        this.resetForm()
        this.setState({redirctToUser: true})
    }



    //REDIRECT TO USERS PAGE
    render() {
        return (
            <UserFormContainer>

                Hello from UserEdit
                {this.state.redirect ? <Redirect to={`/users`}>Users</Redirect> :
                <FormWrapper>
                      <FormBody onSubmit={this.updateUser}>
                    <FormField>
                        <FormHeader>
                            <FormHeading>Edit User</FormHeading>
                        </FormHeader>
                        <FormInput
                            type="string"
                            name="firstName"
                            placeholder={this.props.user.firstName}
                            onChange={this.handleInputChange} 
                            value={this.state.updatedUser.firstName}/>
                    </FormField>

                    <FormField>
                        
                        <FormInput
                            type="string"
                            name="lastName"
                            placeholder={this.props.user.lastName}
                            onChange={this.handleInputChange} 
                            value={this.state.updatedUser.lastName}/>
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="img"
                            placeholder={this.props.user.img}
                            onChange={this.handleInputChange} 
                            value={this.state.updatedUser.img} />
                    </FormField>
                    <FormField>
                        <FormInputButton
                            type="submit"
                            value="Update User" />
                    </FormField>
                    <FormField>
                    <FormButton><Link to="/users">Back</Link></FormButton>
                    </FormField>
                </FormBody>
                </FormWrapper>
                }
            </UserFormContainer>
        )

    }
}

export default UserEdit