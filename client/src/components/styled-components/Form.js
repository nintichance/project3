import styled from 'styled-components'


export const FormWrapper = styled.div`

  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;

`

export const FormHeader = styled.header`

padding-top: 32px;
padding-bottom: 32px;
`

export const FormHeading = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`
export const FormBody = styled.div`
    padding-right: 32px;
    padding-left: 32px;
`
export const FormField = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`

export const FormInput = styled.input`
padding: 7px 0;
width: 100%;
font-family: inherit;
font-size: 14px;
border-top: 0;
border-right: 0;
border-bottom: 1px solid #ddd;
border-left: 0;
transition: border-bottom-color .25s ease-in;

&:focus {
  border-bottom-color: #e5195f;
  outline: 0;
}
`

export const FormButton = styled.button`

  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }

`

export default {
    FormWrapper, FormHeader, FormHeading, FormBody, FormField, FormInput, FormButton
}

// const sc = styled.default
// const { css } = styled
// const cardContainer = document.querySelector('.card-container')

// const CardFieldset = sc.fieldset`
//   position: relative;
//   padding: 0;
//   margin: 0;
//   border: 0;

//   & + & {
//     margin-top: 24px;
//   }

//   &:nth-last-of-type(2) {
//     margin-top: 32px;
//   }

//   &:last-of-type {
//     text-align: center;
//   }
// `




// const CardLink = sc.a`
//   display: inline-block;
//   font-size: 12px;
//   text-decoration: none;
//   color: #aaa;
//   border-bottom: 1px solid #ddd;
//   cursor: pointer;
//   transition: color .25s ease-in;

//   &:hover {
//     color: #777;
//   }
// `

// class Card extends React.Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       isPasswordVisible: false
//     }

//     this.revealPassword = this.revealPassword.bind(this);
//   }

//   revealPassword () {
//     this.setState({
//       isPasswordVisible: !this.state.isPasswordVisible
//     })
//   }

//   render () {
//     return(
//       <CardWrapper>
//         <CardHeader>
//           <CardHeading>New User</CardHeading>
//         </CardHeader>

//         <CardBody>
//           <CardFieldset>
//             <CardInput
//               placeholder='Username'
//               type='text'
//               required
//             />
//           </CardFieldset>

//           <CardFieldset>
//             <CardInput
//               placeholder='E-mail'
//               type='text'
//               required
//             />
//           </CardFieldset>

//           <CardFieldset>
//             <CardInput
//               placeholder='Password'
//               type={!this.state.isPasswordVisible ? 'password' : 'text'}
//               required
//             />

//             <CardIcon
//               onClick={this.revealPassword}
//               className='fa fa-eye'
//               eye
//               small
//             />
//           </CardFieldset>

//           <CardFieldset>
//             <CardOptionsNote>Or sign up with</CardOptionsNote>

//             <CardOptions>
//               <CardOptionsItem>
//                 <CardIcon
//                   onClick={this.revealPassword}
//                   className='fa fa-google-plus'
//                   big
//                 />
//               </CardOptionsItem>

//               <CardOptionsItem>
//                 <CardIcon
//                   onClick={this.revealPassword}
//                   className='fa fa-twitter'
//                   big
//                 />
//               </CardOptionsItem>

//               <CardOptionsItem>            
//                 <CardIcon
//                   onClick={this.revealPassword}
//                   className='fa fa-facebook'
//                   big
//                 />
//               </CardOptionsItem>
//             </CardOptions>
//           </CardFieldset>

//           <CardFieldset>
//             <CardButton type='button'>Sign Up</CardButton>
//           </CardFieldset>

//           <CardFieldset>
//             <CardLink>I already have an account</CardLink>
//           </CardFieldset>
//         </CardBody>
//       </CardWrapper>
//     )
//   }
// }

// ReactDOM.render(
//   <Card />,
//   cardContainer
// )