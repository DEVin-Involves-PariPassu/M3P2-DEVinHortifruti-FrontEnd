import React from "react";
import Stack from "@mui/material/Stack";

function ListHeader({ paginaAtual }) {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      width={"100%"}
      justifyContent={"space-between"}
    >
      {paginaAtual === "usuarios/novo" && <h1>Novo Usuário</h1>}
      {paginaAtual === "produtos/novo" && <h1>Novo Produto</h1>}
      {paginaAtual === "vendas/novo" && <h1>Nova Venda: Dados de Entrega</h1>}
    </Stack>
  );
}
export default ListHeader;
