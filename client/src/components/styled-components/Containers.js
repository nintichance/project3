import React from 'react'
import styled from 'styled-components'


export const Container = styled.div`
    display: grid;
    justify-items: center;
    width: 100vw;
    background-color: #1b1c1e;
`
export const UserShowContainer = Container.extend`
    height: 100vh;
`
export const UserContainer = Container.extend`
    border: 1px solid orange;
    width: 100vw;
`
export const UserListContainer = Container.extend`
   border: 1px solid black;
   grid-template-columns: 1fr, 1fr;
`
export const UserFormContainer = Container.extend`
    border: 1px solid blue;
    width: 100vw;
    height: 100vh;
`
export const UserPageContainer = Container.extend`
    border: 1px solid red;
`
export default {
    UserShowContainer, UserListContainer, UserFormContainer, UserContainer, UserPageContainer
}