import styled from 'styled-components'


export const Nav = styled.div`
    width: 100vw;
    position: fixed;        
    color: rgb(0, 0, 0);
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    box-shadow: 0px 3px 5px rgba(100, 100, 100, 0.49);
    height: 10vh;
    margin-bottom: 25px;
    background-color: linear-gradient(to right, rgb(0, 204, 255) , rgb(250,215,215));
`
export const NavItems = styled.div`
    margin-right: 25px;

    a {
        margin: 10px;
    }
`

export default {
 Nav, NavItems
}
