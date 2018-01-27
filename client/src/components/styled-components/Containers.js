import styled from 'styled-components'


export const Container = styled.div`
    display: grid;
    justify-items: center;
    width: 100vw;
   
`
export const UserShowContainer = Container.extend`
    height: 100vh;
`
export const UserContainer = styled.div`
  
    display: grid;
    justify-items: center;
   
`
export const UserListContainer = Container.extend`
  
   grid-template-columns: repeat(4, 1fr)
`
export const UserFormContainer = Container.extend`
    width: 100vw;
    height: 100vh;
`
export const UserPageContainer = Container.extend`
    border: 1px solid red;
`
export default {
    UserShowContainer, UserListContainer, UserFormContainer, UserContainer, UserPageContainer
}
