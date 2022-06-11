import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Switch,
  FormControlLabel,
  Button,
} from "@mui/material";
import InputCalendar from "components/InputCalendar";
import Swal from "sweetalert2";

const UsuarioForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dtNascimento, setDtNascimento] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!nome) {
        alert("Nome é um campo obrigatório.");
        return;
      } else if (!email) {
        alert("E-mail é um campo obrigatório.");
        return;
      } else if (
        !email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        alert("Insira um e-mail válido.");
        return;
      }
      event.target.checkValidity();

      const Swal = require("sweetalert2");
      Swal.fire({
        title: "Usuário cadastrado com sucesso.",
        icon: "success",
        width: "24rem",
        confirmButtonColor: "#36a23f",
      });
      navigate("/usuarios");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Desculpe o transtorno. Estamos resolvendo o problema.",
        width: "24rem",
      });
    }

    const response = await fetch("https://localhost:3000/usuarios/novo", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        email: email,
        dtNascimento: dtNascimento,
        isAdmin: isAdmin,
      }),
    });
    console.log(response);
  };

  const handleCancel = () => {
    Swal.fire({
      title: "Tem certeza que deseja cancelar?",
      text: "As informações preenchidas serão perdidas.",
      icon: "warning",
      width: "24rem",
      showCancelButton: true,
      confirmButtonColor: "#36a23f",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Cadastro cancelado.",
          icon: "error",
          width: "24rem",
          confirmButtonColor: "#36a23f",
        });
        navigate("/usuarios");
      }
    });
  };

  return (
    <form className="container-form" onSubmit={handleSubmit}>
      <Box
        component="form"
        sx={{
          "& .MuiButton-root": {
            width: "auto",
            display: "flex",
            flexDirection: "raw",
          },
          "& .MuiTextField-root": { 
            m: 1,
            width: "auto",
            background:"#FFFFFF",
            borderRadius: "5px 5px 0px 0px",
            color: "#4a5926",
            display: "flex",
            flexDirection: "column",
           },
        }}
        noValidate
        autoComplete="off"
      >
       
        <TextField
          required
          id="nome"
          label="Nome Completo"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}          
        />
        
        <TextField
          required
          id="email"
          label="E-mail"
          placeholder="devin@hortifruti.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
   
        <InputCalendar />

        <div className="switch-control">
          <FormControlLabel
            control={<Switch defaultChecked checked={isAdmin} />}
            onChange={(event) => setIsAdmin(event.target.checked)}
            label="É usuário admin?"
            value={isAdmin}
          />
        </div>
      </Box>

      <div className="form-buttons">
        <Button
          variant="contained"
          color="info"
          size="medium"
          hover
          onClick={handleCancel}
          sx={{
            width: "170px",
            justifyContent: "space-around",
            fontFamily: "Exo",
            fontSize: "0.7rem",
            borderRadius: "10px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <h3>Cancelar</h3>
        </Button>

        <Button
          variant="contained"
          color="success"
          size="medium"
          hover
          onClick={handleSubmit}
          sx={{
            width: "170px",
            justifyContent: "space-around",
            fontFamily: "Exo",
            fontSize: "0.7rem",
            borderRadius: "10px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <h3>Cadastrar</h3>
        </Button>
      </div>
    </form>
  );
};

export default UsuarioForm;
