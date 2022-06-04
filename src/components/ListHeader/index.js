import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import MdOutlineAddBusiness from "react-icons/md";
import BsPersonPlus from "react-icons/bs";
import MdOutlinePostAdd from "react-icons/md";

function ListHeader({ paginaAtual, onClick }) {
  return (
    <Stack spacing={24} direction="row">
      {paginaAtual === "vendas" && <h1>Vendas Cadastradas: </h1>}
      {paginaAtual === "produtos" && <h1>Produtos Cadastrados: </h1>}
      {paginaAtual === "usuarios" && <h1>Usuários Cadastrados: </h1>}
      <Button
        variant="contained"
        color="variant"
        size="medium"
        onClick={onClick}
      >
        {paginaAtual === "vendas" && (
          <>
            <h3>NOVA VENDA</h3>
            <MdOutlineAddBusiness />
          </>
        )}

        {paginaAtual === "usuarios" && (
          <>
            <h3>NOVO USUÁRIO</h3>
            <BsPersonPlus />
          </>
        )}
        {paginaAtual === "produtos" && (
          <>
            <h3>NOVO PRODUTO</h3>
            <MdOutlinePostAdd />
          </>
        )}
      </Button>
    </Stack>
  );
}

export default ListHeader;