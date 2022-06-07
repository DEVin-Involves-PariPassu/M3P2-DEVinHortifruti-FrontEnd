import React from "react";
import { Container, ContainerDivs, ImageLogo, LogoContainer, PasswordFormContainer, PasswordFormInput, SubmitButton, SubmitButtonContainer, UserFormContainer, UserFormInput } from "./login.elements";
import Logo from "../../assets/logo1_colorida.png"

function LoginForm() {
  return (

    <Container>
      <ContainerDivs>
      <LogoContainer>
        <ImageLogo src={Logo}></ImageLogo>
      </LogoContainer>
      <UserFormContainer>
        <UserFormInput placeholder="Usuário"  required/>
      
      </UserFormContainer>
      <PasswordFormContainer><PasswordFormInput placeholder="Senha" type="password" required/>
      
      </PasswordFormContainer>
      <SubmitButtonContainer>
        <SubmitButton>LOGIN</SubmitButton>
      </SubmitButtonContainer>
      </ContainerDivs>
    </Container>  
  )
}

export default LoginForm;
