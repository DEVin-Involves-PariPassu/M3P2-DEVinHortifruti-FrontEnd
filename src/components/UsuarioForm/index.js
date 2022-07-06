import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  TextField,
  Switch,
  FormControlLabel,
  Button,
} from "@mui/material";
import Swal from "sweetalert2";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import api from "utils/api";
import { authState } from "store/modules/auth/recoil";
import { useRecoilValue } from "recoil";

const UsuarioForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [dtNasc, setDtNasc] = useState("");
  const [dtNascimento, setDtNascimento] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);
  const token = useRecoilValue(authState);
  api.defaults.headers.Authorization = `Bearer ${token}`;

  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (event) => {
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
      } else if (!login) {
        alert("Login é um campo obrigatório.");
        return;
      } else if (!dtNascimento) {
        alert("Data de Nascimento é um campo obrigatório.");
        return;
      }

      if (params.id) {
      api.put(`/usuarios/${params.id}`, {
        nome: nome,
        email: email,
        dtNascimento: dtNascimento,
        login: login,
        isAdmin: isAdmin,
      })
      .then(() => {
        Swal.fire({
          title: "Usuário atualizado com sucesso.",
          icon: "success",
          width: "24rem",
          confirmButtonColor: "#36a23f",
        });
        navigate('/usuarios');
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Desculpe o transtorno. Estamos resolvendo o problema.",
          width: "24rem",
        });
      });
    } else {
      api.post("/usuarios", {
        nome: nome,
        email: email,
        dtNascimento: dtNascimento,
        login: login,
        isAdmin: isAdmin,
      })
      .then(() => {
        Swal.fire({
          title: "Usuário cadastrado com sucesso.",
          icon: "success",
          width: "24rem",
          confirmButtonColor: "#36a23f",
        });
        navigate('/usuarios');
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Desculpe o transtorno. Estamos resolvendo o problema.",
          width: "24rem",
        });
      });
    }
  };

  useEffect(() => {
    if (params.id) {
      api.get(`/usuarios/${params.id}`).then((response) => {
        setNome(response.data.nome);
        setEmail(response.data.email);
        setLogin(response.data.login);
        setDtNascimento(new Date (response.data.dtNascimento).utc().format('MM/DD/YYYY'));
        setIsAdmin(response.data.isAdmin);
      });
    }
  }, [params]);

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
          id="login"
          label="Login"
          placeholder="Login do Usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />    
        
        <TextField
          required
          id="email"
          label="E-mail"
          placeholder="devin@hortifruti.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disableFuture
            placeholder="dd/mm/aaaa"
            label="Data de Nascimento"
            openTo="day"
            views={["day", "month", "year"]}
            value={dtNasc}
            onChange={(newDtNascimento) => {
              setDtNasc(newDtNascimento)
              setDtNascimento(moment(dtNasc).utc().format('DD/MM/YYYY'))
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

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
