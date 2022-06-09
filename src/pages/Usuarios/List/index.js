import React from "react";
import InputSearch from "components/InputSearch";
import UsuarioList from "components/UsuarioList";
import ListHeader from "components/ListHeader";
import { useNavigate } from "react-router";

function UsuarioListPage() {
  const navigate = useNavigate();

  return (
    <div className="pg-container">
        <section className="secao-usuarios">
          <ListHeader
            paginaAtual="usuarios"
            onClick={() => navigate("/usuarios/novo")}
          />

          <InputSearch placeholder={"Digite o nome do usuário"} onChange={""} />

          <UsuarioList />
        </section>
      </div>
  );
}

export default UsuarioListPage;
