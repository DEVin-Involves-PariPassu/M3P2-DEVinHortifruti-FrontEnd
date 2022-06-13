import * as React from 'react';
import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mask } from 'remask';
import axios from 'axios';
import "./style.css";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';

let schema = yup.object().shape({
  cpf: yup.string().required('Cpf é obrigatório'),
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Digite um formato de email válido').required('Email é obrigatório'),
  telefone: yup.string().required('Telefone é obrigatório'),
});

export default function AlertDialog({ open, handleClickOpen, handleClose }) {

  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    schema
      .validate({ cpf, nome, email, telefone }, { abortEarly: false })
      .then(() => {
        axios.post('http://localhost:8081/comprador', {
          cpf: cpf,
          nome: nome,
          email: email,
          telefone: telefone
        });
        alert('Comprador cadastrado com sucesso!')
        navigate('/vendas/novo/comprador');
      })
      .catch((error) => alert(error.inner[0].message))
  }

  const handleChangePhone = (e) => {
    if (e.target.value.length <= 9) {
      setTelefone(mask(e.target.value, '9999-9999'))
    } else {
      setTelefone(mask(e.target.value, '99999 - 9999'))
    }

  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Cadastro Comprador
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form className='form-modal' onSubmit={handleSubmit}>
          <DialogTitle id="alert-dialog-title">
            {"Comprador"}
          </DialogTitle>
          <DialogContent className='input-modal'>
            <TextField id='cpf-input' value={cpf}
              onChange={(event) => setCpf(mask(event.target.value, '999.999.999-99'))}
              label="CPF" variant="outlined" />
            <TextField value={nome}
              onChange={(event) => setNome(event.target.value)}
              label="Nome" variant="outlined" />
            <TextField value={email}
              onChange={(event) => setEmail(event.target.value)}
              label="Email" variant="outlined" />
            <TextField value={telefone}
              onChange={handleChangePhone}
              label="Telefone" variant="outlined" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined">Cancelar</Button>
            <Button id='botao' type="submit" variant="contained">Salvar</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
