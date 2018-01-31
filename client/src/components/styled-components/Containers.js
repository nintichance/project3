import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 100vw;
    background: linear-gradient(to bottom, rgb(255, 255, 255) , rgb(238,248,255));
   
`

export const UserShowContainer = Container.extend`
    margin-top: 100px;
    height: 500vh;
    width: 100 vw;
    display: flex;
    align-items: center;
`
export const UserContainer = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    linear-gradient(to right, rgb(0, 204, 255) , rgb(250,215,215));
`
export const KidContainer = UserContainer.extend`
    
`
export const GradientContainer = Container.extend`
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
export const  HomeContainer = GradientContainer.extend`
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100 vw;

`
export const UserListContainer = Container.extend`
  
   grid-template-columns: repeat(4, 1fr)
`
export const UserFormContainer = GradientContainer.extend`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
export const UserPageContainer = Container.extend`
    height: 200vh;
`
export default {
    UserShowContainer, UserListContainer, UserFormContainer, UserContainer, UserPageContainer, HomeContainer, KidContainer
}
