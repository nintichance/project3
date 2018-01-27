import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 100vw;
    background: linear-gradient(270deg, #17d1a1, #d9a5ef);
    background-size: 400% 400%;
  
  -webkit-animation: AnimationName 15s ease infinite;
  -moz-animation: AnimationName 15s ease infinite;
  animation: AnimationName 15s ease infinite;
  
  @-webkit-keyframes AnimationName {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @keyframes AnimationName { 
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
   
`
export const UserShowContainer = Container.extend`
    height: 100vh;
`
export const UserContainer = styled.div`
    justify-items: center;
   
`
export const  HomeContainer = Container.extend`
  justify-items: center;
  height: 100vh;
  width: 100 vw;
`
export const UserListContainer = Container.extend`
  
   grid-template-columns: repeat(4, 1fr)
`
export const UserFormContainer = Container.extend`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
export const UserPageContainer = Container.extend`
    border: 1px solid red;
`
export default {
    UserShowContainer, UserListContainer, UserFormContainer, UserContainer, UserPageContainer, HomeContainer
}
