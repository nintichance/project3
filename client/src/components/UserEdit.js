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
        console.log(`FORM STATE:`, this.state.newUser)
    }
    handleInputChange = (event) => {
        const attribute = event.target.name
        let value = event.target.value

        if (attribute === 'firstName'){
            value = String(value)
        }
        const newUser = {...this.state.newUser}
        newUser[attribute] = value
        this.setState({newUser})
    }
    resetForm = () => {
        const newUser = {...this.defaultState.newUser}
        this.setState({newUser, redirect: true})
    }

    updateUserState = (event) => {
        event.preventDefault()
        this.props.updateUser(this.state.updatedUser)
        this.resetForm()
    }
    updateUser = (event) =>{
    event.preventDefault()
    axios.patch(`/api/Users/${this.props.match.params.userId}`, this.state.user)
    .then((res)=>{
        const update = res.data
        const user = this.state.user
        //console.log('Upadated user infor', res.data)
        this.props.updateUsers(user, update)
        this.updateUserState()
    }).catch((err)=>{
        console.log(err)
    })
    this.setState({redirctToUser: true})
    }



    //REDIRECT TO USERS PAGE
    render() {
        return (
            <UserFormContainer>

                Hello from UserEdit
                {/* {this.state.redirect ? <Redirect to="/users">Users</Redirect> : */}
                <FormWrapper>
                      <FormBody onSubmit={this.updateUser}>
                    <FormField>
                        <FormHeader>
                            <FormHeading>Edit User</FormHeading>
                        </FormHeader>
                        <FormInput
                            type="string"
                            name="firstName"
                            placeholder="First Name"
                            onChange={this.handleInputChange} />
                    </FormField>

                    <FormField>
                        
                        <FormInput
                            type="string"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={this.handleInputChange} />
                    </FormField>
                    <FormField>
                        <FormInput
                            type="string"
                            name="img"
                            placeholder="Image URL"
                            onChange={this.handleInputChange} />
                    </FormField>
                    <FormField>
                        <FormInputButton
                            type="submit"
                            value="Add New User" />
                    </FormField>
                    <FormField>
                    <FormButton><Link to="/users">Back</Link></FormButton>
                    </FormField>
                </FormBody>
                </FormWrapper>
                {/* } */}
            </UserFormContainer>
        )

    }
}

export default UserEdit