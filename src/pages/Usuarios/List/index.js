import React from "react";
import ListHeader from "components/ListHeader";
import InputSearch from "components/InputSearch";
import { useNavigate } from "react-router";
import UsuarioList from "components/UsuarioList";

function UsuarioListPage() {
  const navigate = useNavigate();

  return (
    <div className="pg-background">
      <div className="pg-container">
        <ListHeader
          paginaAtual="usuarios"
          onClick={() => navigate("/usuarios/novo")}
        ></ListHeader>

        <InputSearch
          placeholder="Digite o nome do usuário"
          onChange={""}
          className="search-usuario"
        />

        <div className="tb-container">
          <UsuarioList />
        </div>
      </div>
    </div>
  );
}

export default UsuarioListPage;
