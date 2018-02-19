import axios from 'axios'

export function sendUsersToState(usersFromDatabase) {
  return {type: 'GET_USERS', usersFromDatabase}
}

export function getUsers() {
  return function (dispatch) {
    return axios
      .get('/api/users')
      .then((response) => {
        dispatch(sendUsersToState(response.data))
      })
  }  
}


//dispatch- you are emitting this object out to the reducer
//thunk allows an action creator to handle asynchronous data calls

export function sendOneUserToState(userFromDatabase){
  return {type: 'GET_USER', userFromDatabase}
}

export function getUser(userId){
  return function (dispatch){
    return axios.get(`/api/users/${userId}`).then((response)=>{
      console.log(`CALLLLLEDDDD!!!, ${userId}, ${JSON.stringify(response.data)}`)
      dispatch(sendOneUserToState(response.data))
    })
  }
}

export function sendNewUserToState(newUserData) {
  return {type: 'CREATE_USER', newUserData}
}

export function sendNewUserToDatabase(newUserInfo) {
  return function (dispatch) {
    return axios
      .post('/api/users', newUserInfo)
      .then((response) => {
        dispatch(sendNewUserToState(response.data))
      })
  }
}

export function editedUserToState(editedUserData) {
  return {type: 'EDIT_USER', editedUserData}
}

export function editUser(editedUserInfo) {
  return function (dispatch) {
    return axios
      .patch(`/api/users/${editedUserInfo.id}`, editedUserInfo)
      .then((response) => {
        dispatch(editedUserToState(editedUserInfo))
      })
  }
}

export function deleteUserFromState(userToDeleteId) {
  return {type: 'DELETE_USER', userToDeleteId}
}

export function deleteUser(userToDeleteFromDatabase) {
  return function (dispatch) {
    return axios
      .delete(`/api/users/${userToDeleteFromDatabase._id}`)
      .then((response) => {
        dispatch(deleteUserFromState(userToDeleteFromDatabase._id))
      })
  }
}