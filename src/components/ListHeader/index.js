import React from "react";
import './ListHeader.css'

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import {MdOutlineAddBusiness} from "react-icons/md";
import {BsPersonPlus} from "react-icons/bs";
import {MdOutlinePostAdd} from "react-icons/md";

function ListHeader({ paginaAtual, onClick }) {
  return (
    <Stack  direction="row" alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
      {paginaAtual === "vendas" && <h1 className="title">Vendas Cadastradas </h1>}
      {paginaAtual === "produtos" && <h1 className="title">Produtos Cadastrados </h1>}
      {paginaAtual === "usuarios" && <h1 className="title">Usuários Cadastrados </h1>}
      <Button
        variant="contained"
        color="variant"
        size="medium"
        onClick={onClick}
        sx={{minWidth: '170px', justifyContent: 'space-around', fontFamily:'Exo', fontSize: '0.7rem'}}
      >
        {paginaAtual === "vendas" && (
          <>
            <h3>NOVA VENDA</h3>
            <MdOutlineAddBusiness size={'22px'}/>
          </>
        )}

        {paginaAtual === "usuarios" && (
          <>
            <h3>NOVO USUÁRIO</h3>
            <BsPersonPlus size={'22px'}/>
          </>
        )}
        {paginaAtual === "produtos" && (
          <>
            <h3>NOVO PRODUTO</h3>
            <MdOutlinePostAdd size={'22px'}/>
          </>
        )}
      </Button>
    </Stack>
  );
}

export default ListHeader;