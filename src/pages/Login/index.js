import React, { useState, useEffect } from 'react';
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
} from "../../pages/Login/login.elements";
import Logo from "../../assets/logo1_colorida.png";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { authState, signed, isAdminState } from 'store/modules/auth/recoil';
import api from 'utils/api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


// import { Container } from './styles';

function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const setAuthToken = useSetRecoilState(authState);
    const [logado, setLogado] = useRecoilState(signed);
    const setIsAdmin = useSetRecoilState(isAdminState);

  async function fazerLogin(login, senha) {
      const response = await api.post(`/login`, {
      login: login,
      senha: senha
    });
    const { token, admin } = await response.data;
    setIsAdmin(admin);
    return token;
  }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        if (!login) {
          alert("Por favor insira seu login");
          return;
        } else if (senha === "" || senha === " ") {
          alert("Por favor digite sua senha!");
          return;
        }
        const returnedToken = await fazerLogin(login, senha);
        setAuthToken(returnedToken);
        setLogado(true);
        localStorage.setItem('session',JSON.stringify(returnedToken));
        navigate("/produtos");

      } catch (error) {
        Swal.fire({
          icon: "error", title: "Oops...",
          text: "Usuário ou senha inválida", width: "24rem"
        })
      }
    };

    useEffect(() => {
      console.log(logado);
      if(logado) {
        setLogado(true);
        navigate("/produtos");
      }
    }, [logado, navigate, setLogado]);

    return (
      <Container>
        <ContainerForm onSubmit={handleSubmit}>
          <LogoContainer>
            <ImageLogo src={Logo}></ImageLogo>
          </LogoContainer>
          <UserFormContainer>
            <UserFormInput 
            type="login"
            name="login"
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Login"
            required />
          </UserFormContainer>
          <PasswordFormContainer>
            <PasswordFormInput
            type="password" 
            name="password"  
            placeholder="Senha" 
            onChange={(e) => setSenha(e.target.value)}
            required />
          </PasswordFormContainer>
          <SubmitButtonContainer>
            <SubmitButton type="submit">LOGIN</SubmitButton>
          </SubmitButtonContainer>
        </ContainerForm>
      </Container>
  )
}


export default Login;