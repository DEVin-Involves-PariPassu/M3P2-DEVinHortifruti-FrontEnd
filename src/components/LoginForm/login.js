import React, {useState} from "react";
import {
  Container,
  ContainerForm,
  ImageLogo,
  LogoContainer,
  PasswordFormContainer,
  PasswordFormInput,
  SubmitButton,
  SubmitButtonContainer,
  UserFormContainer,
  UserFormInput,
} from "./login.elements";
import Logo from "../../assets/logo1_colorida.png";
import RotasPrivadas from "Routes/RotasPrivadas";


function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!email) {
        alert("Por favor insira um e-mail");
        return;
      } else if (
        !email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        alert("Email inválido. Por favor tente novamente.");
        return;
      }else if (password === "" || password === " ") {
        alert("Por favor digite sua senha!");
        return;
      }
      console.log("Chegou no fim")
      RotasPrivadas(); //é assim?
    } catch (error) {
      alert("Não foi possivel concluir a sua solicitação!");
    }
  };

  return (
    <Container>
      <ContainerForm onSubmit={handleSubmit}>
        <LogoContainer>
          <ImageLogo src={Logo}></ImageLogo>
        </LogoContainer>
        <UserFormContainer>
          <UserFormInput 
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required />
        </UserFormContainer>
        <PasswordFormContainer>
          <PasswordFormInput
          type="password" 
          name="password"  
          placeholder="Senha" 
          onChange={(e) => setPassword(e.target.value)}
          required />
        </PasswordFormContainer>
        <SubmitButtonContainer>
          <SubmitButton type="submit">LOGIN</SubmitButton>
        </SubmitButtonContainer>
      </ContainerForm>
    </Container>
  );
}

export default LoginForm;
