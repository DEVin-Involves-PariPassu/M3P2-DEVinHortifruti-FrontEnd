import React, {useState} from 'react';
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
import { useRecoilState } from 'recoil';
import { authState, signed } from 'store/modules/auth/recoil';
import api from 'utils/api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


// import { Container } from './styles';

function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const [authToken, setAuthToken] = useRecoilState(authState);
    const [logado, setlogado] = useRecoilState(signed);

  async function fazerLogin(login, senha) {
      const response = await api.post(`/login`, {
      login: login,
      senha: senha
    });
    const { token } = await response.data;
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
        setlogado(true);
        navigate("/produtos")

      } catch (error) {
        Swal.fire({
          icon: "error", title: "Oops...",
          text: "Usuário ou senha inválida", width: "24rem"
        })
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