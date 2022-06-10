import React from "react";
import NovaVendaResumo from "components/NovaVendaResumo";

import { Button, IconButton } from "@mui/material";
import { MdDeleteForever } from "react-icons/md";

import "./style.css";

// import { Container } from './styles';

function Resumo() {
  function criaLinha(id, imagem, nome, subtotal, botaoDeletar) {
    return { id, imagem, nome, subtotal, botaoDeletar };
  }

  const produtosCarrinho = [
    criaLinha(
      0,
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        className="imagemProduto"
        src="https://images.vexels.com/media/users/3/139632/isolated/lists/7964ff194a715e6d156278a0bf0088a2-desenho-de-banana.png"
      ></img>,
      "banana",
      1,
      <IconButton size="large">
        <MdDeleteForever size={25} color="red" />
      </IconButton>
    ),
  ];

  function confirmar() {
    alert("confirmar");
  }

  return (
    <div className="containerTabela">
      <section className="cabecalho">
        <h1>Nova venda: Resumo</h1>
        <h3>Comprador: Henrique Douglas</h3>
        <h3>CPF: 123.456.789-12</h3>
      </section>
      <NovaVendaResumo itens={produtosCarrinho} />
      <div className="rodape">
        <h1>Total: 123</h1>
        <Button variant="contained" size="small" onClick={confirmar}>
          Confirmar
        </Button>
      </div>
    </div>
  );
}

export default Resumo;
