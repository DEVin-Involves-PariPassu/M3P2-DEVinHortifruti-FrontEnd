import styled from "styled-components";
import marca_logo from "../../assets/marca_dagua.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  background-color: #ff9e00;
  background-image: url(${marca_logo});
  height: 100vh;
  width: 100vw;
`;

export const ContainerDivs = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  justify-content: center;

  border-radius: 10px;
  width: 400px;
  padding: 20px 5px 20px 5px;
  height: 70vh;
  max-height: 600px;
  min-height: 400px;
  background-color: #fff7de;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  opacity: 0.9;

  @media (max-width: 600px) {
    width: 100%;
    min-width: 200px;
    max-width: 400px;
    padding: 20px 5px 20px 5px;
    margin: 0 10px 0 10px;
  }
`;

//Logotipo
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ImageLogo = styled.img`
  width: 100%;
  max-width: 300px;
  padding: 5px 10px 30px 10px;

  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;
//Campo input de Usuário
export const UserFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;
export const UserFormInput = styled.input`
  margin: 5px 0 2px 0;
  padding: 0 0 0 10px;
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  &:focus {
    outline: 0;
    background-color: #19a42c05;
  }
  &:hover {
    background-color: #19a42c05;
  }
`;

//Campo input de Senha
export const PasswordFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const PasswordFormInput = styled.input`
  margin: 5px 0 2px 0;
  padding: 0 0 0 10px;
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  &:focus {
    outline: 0;
    background-color: #19a42c05;
  }
  &:hover {
    background-color: #19a42c05;
  }
`;

//Botão Enviar
export const SubmitButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  margin: 25px 0 2px 0;
  width: 83%;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #19a42c;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.2em;
  font-weight: 500;
  color: white;

  &:hover {
    background-color: #581a0d;
  }
`;
