import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from 'utils/api';
import { authState } from "store/modules/auth/recoil";
import { useRecoilValue } from "recoil";
import { isAdminState } from 'store/modules/auth/recoil';

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

  const [urlFoto, setUrlFoto] = useState('');
  const [nome, setNome] = useState('');
  const [precoSugerido, setPrecoSugerido] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState(true);

  const token = useRecoilValue(authState);
  api.defaults.headers.Authorization = `Bearer ${token}`;
  const isAdmin = useRecoilValue(isAdminState);

  const handleSubmitProduto = (event) => {
    event.preventDefault();

    if (parans.id) {
      api
        .put(`http://localhost:8081/produto/${parans.id}`, {
          urlFoto: urlFoto,
          nome: nome,
          precoSugerido: precoSugerido,
          descricao: descricao,
          isAtivo: status,
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
      api
        .post('http://localhost:8081/produto', {
          urlFoto: urlFoto,
          nome: nome,
          precoSugerido: precoSugerido,
          descricao: descricao,
          isAtivo: status,
        })
        .then(() => {
          alert('Produto cadastrado com sucesso!');
          navigate('/produtos');
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
      api.get(`http://localhost:8081/produto/${parans.id}`).then((response) => {
        setUrlFoto(response.data.urlFoto);
        setNome(response.data.nome);
        setPrecoSugerido(response.data.precoSugerido);
        setDescricao(response.data.descricao);
        setStatus(response.data.isAtivo);
      });
    }
  }, [parans]);

  return (
    <div className="pg-container">
      <div className="title-produto">
        <h1>{parans.id ? 'Atualizar Produto' : 'Novo Produto'}</h1>
      </div>
      <form className="form-produto" onSubmit={handleSubmitProduto}>
        {urlFoto && <img width="270px" src={urlFoto} alt="Imagem do produto" />}
        <TextField
          sx={{ background: '#fff', borderRadius: '5px 5px 0px 0px' }}
          label="URL do produto"
          variant="filled"
          type="url"
          value={urlFoto}
          onChange={(event) => setUrlFoto(event.target.value)}
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
          value={precoSugerido}
          onChange={(event) => setPrecoSugerido(event.target.value)}
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
