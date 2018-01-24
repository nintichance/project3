import React, { Component } from 'react'

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.defaultState = {
            user: {
                firstName: 'Eric',
                lastName: 'Lu',
                img: 'https://i.imgur.com/KIiCMv3.jpg'
            }
        }
        this.state = { ...this.defaultState }
    }

    render() {
        return (
            <div>
                Hello from UserForm
                {/* <form onSubmit={this._addNewCredit}>
                    <div>
                        <span>New User </span>
                        <input
                            type="string"
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.user.firstName}
                            onChange={this.handleInputChange} />
                    </div>

                    <div>
                        
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={this.state.newCredit.description}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={this.state.newCredit.description}
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Add New User" />
                    </div>

                </form> */}
            </div>
        )

    }
}

export default UserForm