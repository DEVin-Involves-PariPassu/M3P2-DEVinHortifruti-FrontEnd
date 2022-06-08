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
      .post('http://localhost:8081/produtos/', {
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
      <h1 className="title-produto">Novo produto</h1>
      <form className="form-produto" onSubmit={handleSubmitProduto}>
        {url && <img width="270px" src={url} alt="Imagem do produto" />}
        <TextField
          sx={{ background: '#fff', borderRadius: '5px 5px 0px 0px' }}
          label="URL do produto"
          variant="filled"
          type="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <TextField
          sx={{ background: '#fff', borderRadius: '5px 5px 0px 0px' }}
          label="Nome do produto"
          variant="filled"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <TextField
          sx={{ background: '#fff', borderRadius: '5px 5px 0px 0px' }}
          label="Preço da caixa"
          variant="filled"
          type="number"
          min="0.1"
          value={preco}
          onChange={(event) => setPreco(event.target.value)}
        />
        <TextField
          sx={{ background: '#fff', borderRadius: '5px 5px 0px 0px' }}
          multiline
          label="Descrição"
          variant="filled"
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
          <Button
            variant="contained"
            color="warning"
            sx={{ fontFamily: 'Exo' }}
          >
            Voltar
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="variant"
            sx={{ fontFamily: 'Exo' }}
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProdutoForm;
