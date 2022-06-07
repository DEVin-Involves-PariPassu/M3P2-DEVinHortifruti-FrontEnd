import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { MdOutlineAddBusiness } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";

function ListHeader({ paginaAtual, onClick }) {
  return (
    <div style={{ display: "flex" }}>
      <Stack direction="row" alignItems="center" spacing={40}>
        {paginaAtual === "vendas" && <h1>Vendas Cadastradas</h1>}
        {paginaAtual === "produtos" && <h1>Produtos Cadastrados</h1>}
        {paginaAtual === "usuarios" && <h1>Usuários Cadastrados</h1>}

        <Button
          variant="contained"
          color="variant"
          size="medium"
          style={{ borderRadius: "20px" }}
          onClick={onClick}
        >
          {paginaAtual === "vendas" && (
            <>
              <h3>NOVA VENDA</h3>
              <MdOutlineAddBusiness style={{ marginLeft: "10px" }} />
            </>
          )}

          {paginaAtual === "produtos" && (
            <>
              <h3>NOVO PRODUTO</h3>
              <MdOutlinePostAdd style={{ marginLeft: "10px" }} />
            </>
          )}

          {paginaAtual === "usuarios" && (
            <>
              <h3>NOVO USUÁRIO</h3>
              <BsPersonPlus style={{ marginLeft: "10px" }} />
            </>
          )}
        </Button>
      </Stack>
    </div>
  );
}

export default ListHeader;