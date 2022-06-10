import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material';

function ProdutoForm() {
  const parans = useParams();
  const navigate = useNavigate();

  const [url, setUrl] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState(true);

  const handleSubmitProduto = (event) => {
    event.preventDefault();

    if (parans.id) {
      axios
        .put(`http://localhost:8081/produtos/${parans.id}`, {
          url: url,
          nome: nome,
          preco: preco,
          descricao: descricao,
        })
        .then(() => {
          alert('Produto atualizado com sucesso!');
          navigate('/produtos');
        })
        .catch(() => {
          alert(
            'Ocorreu um erro ao atualizar o produto! Entre em contato com o administrador do sistema.'
          );
        });
    } else {
      axios
        // .post('http://localhost:8081/produtos/novo',{
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
    }
  };

  useEffect(() => {
    if (parans.id) {
      axios
        .get(`http://localhost:8081/produtos/${parans.id}`)
        .then((response) => {
          setUrl(response.data.url);
          setNome(response.data.nome);
          setPreco(response.data.preco);
          setDescricao(response.data.descricao);
        });
    }
  }, [parans]);

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
            onClick={() => navigate('/produtos')}
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
            {parans.id ? 'Atualizar' : 'Cadastrar'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProdutoForm;
