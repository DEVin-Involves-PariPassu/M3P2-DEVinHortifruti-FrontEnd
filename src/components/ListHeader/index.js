import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";


function ListHeader({ paginaAtual, rota }) {
  return (
    <Stack spacing={24} direction="row">
      {paginaAtual === "vendas" && <h1>Vendas Cadastradas: </h1>}
      {paginaAtual === "produtos" && <h1>Produtos Cadastrados: </h1>}
      {paginaAtual === "usuarios" && <h1>Usuários Cadastrados: </h1>}
      <Button
        variant="contained"
        href={rota}
        color="primary"
        size="medium"
      >
        {paginaAtual === "vendas" && (
          <>
            <h3>NOVA VENDA</h3>
            <AddBusinessIcon />
          </>
        )}

        {paginaAtual === "usuarios" && (
          <>
            <h3>NOVO USUÁRIO</h3>
            <PersonAddAltIcon />
          </>
        )}
        {paginaAtual === "produtos" && (
          <>
            <h3>NOVO PRODUTO</h3>
            <PostAddIcon />
          </>
        )}
      </Button>
    </Stack>
  );
}

export default ListHeader;