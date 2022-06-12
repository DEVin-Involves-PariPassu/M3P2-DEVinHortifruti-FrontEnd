import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import EntradaPesquisa from "./pesquisa";
import './styles.css';

const Produto = () => {
  const api = 'https://kitsu.io/api/edge/';
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(
        `${api}produtos?filter[text]=${text}&page[limit]=12`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);
  return (    
    <div className="produtos">
      <form>
        <DialogTitle id="alert-dialog-title">
          {"Nova venda: Produtos"}
        </DialogTitle>
        <TextField
          id="outlined-basic"
          label="Pesquisa por nome do produto ou código"
          variant="outlined"
        />
        <thead>
          <tr>                       
            <th>Quantidade</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <Button variant="outlined">Próxima etapa</Button>
      </form>
      <EntradaPesquisa
        value={text}
        onChange={(search) => setText(search)}
      />
      {text && !info.data && <span>Carregando...</span>}
      {info.data && (
        <ul className="produtos-list">
          {info.data.map((produto) => (
            <li key={produto.id}>
              <img
                src={produto.attributes.posterImage.small}
                //alt={a.produto.canonicalTitle}
              />
              {produto.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
      </div>
    
  );
};

export default Produto;
