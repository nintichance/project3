import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { UserFormContainer } from './styled-components/Containers'
import { FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton, FormInputButton} from './styled-components/Form'

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
    addNewUser = (event) => {
        event.preventDefault()
        this.props.addNewUser(this.state.newUser)
        this.resetForm()
    }


    //REDIRECT TO USERS PAGE
    render() {
        return (
            <UserFormContainer>

                {this.state.redirect ? <Redirect to="/users">Users</Redirect> :
                <FormWrapper>
                      <FormBody onSubmit={this.addNewUser}>
                    <FormField>
                        <FormHeader>
                            <FormHeading>New User</FormHeading>
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
                    <FormButton><Link to="/users">Cancel</Link></FormButton>
                    </FormField>
                </FormBody>
                </FormWrapper>}
            </UserFormContainer>
        )

    }
}

export default UserForm