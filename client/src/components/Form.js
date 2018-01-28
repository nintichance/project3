import React, { Component } from 'react'
import UserEdit from './UserEdit'
import UserForm from './UserForm'

class Form extends Component{

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

render(){

    return(
        <div>
        <UserForm handleInputChange={this.handleInputChange} resetForm={this.resetForm} addNewUser={this.addNewUSer}/>
        <UserEdit handleInputChange={this.handleInputChange} resetForm={this.resetForm}/>
        </div>
    )

}
}

export default Form