import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class UserForm extends Component {
    constructor(props) {
        super(props)
        this.defaultState = {
            newUser: {
                firstName: 'Eric',
                lastName: 'Lu',
                img: 'https://i.imgur.com/KIiCMv3.jpg'
            }
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
    _resetForm = () => {
        const newUser = {...this.defaultState.newUser}
        this.setState({newUser})
    }
    _addNewUser = (event) => {
        event.preventDefault()
        this.props.addNewUser(this.state.newUser)
        this._resetForm()
    }
    redirectToUser
    render() {
        return (
            <div>
                Hello from UserForm
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

                </form>
            </div>
        )

    }
}

export default UserForm