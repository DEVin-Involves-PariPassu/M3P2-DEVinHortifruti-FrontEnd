import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material';

function ProdutoForm() {
  const [url, setUrl] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState(true);

  const handleSubmitProduto = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:3000/produtos/', {
        url: url,
        nome: nome,
        preco: preco,
        descricao: descricao,
      })
      .then(() => {
        alert('Produto cadastrado com sucesso!');
      })
      .catch(() => {
        alert(
          'Ocorreu um erro ao cadastrar o produto! Entre em contato com o administrador do sistema.'
        );
      });
  };

  return (
    <div className="container">
      <h1 className="title">Novo produto</h1>
      <form className="form-produto" onSubmit={handleSubmitProduto}>
        {url && <img width="270px" src={url} alt="Imagem do produto" />}
        <TextField
          label="URL do produto"
          variant="outlined"
          type="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <TextField
          label="Nome do produto"
          variant="outlined"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <TextField
          label="Preço da caixa"
          variant="outlined"
          type="number"
          min="0.1"
          value={preco}
          onChange={(event) => setPreco(event.target.value)}
        />
        <TextField
          multiline
          label="Descrição"
          variant="outlined"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          rows={6}
        />
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked checked={status} />}
            onChange={(event) => setStatus(event.target.checked)}
            label="Produto Ativo?"
          />
        </FormGroup>
        <div className="form-action">
          <Button variant="outlined">Voltar</Button>
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProdutoForm;
