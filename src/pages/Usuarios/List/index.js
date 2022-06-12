import React, { useEffect, useState } from "react";
import InputSearch from "components/InputSearch";
import UsuarioList from "components/UsuarioList";
import ListHeader from "components/ListHeader";
import Sidebar from "components/Sidebar";
import { useNavigate } from "react-router";

const UsuarioListPage = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const text = event.target.value;
    console.log(text);

    const resultFilter = this.listData.filter((rec) => {
      return rec.nome.toLowerCase().includes(text.toLowerCase());
    });

    this.setState({ usuarioList: resultFilter });
  };

  useEffect(() => {
    async function getUsuarios() {
      const response = await fetch("/api/usuarios");
      const data = await response.json();

      const usuarioList = data.results.map((result) => {
        return {
          nome: result.nome,
          email: result.email,
          dtNascimento: result.dtNascimento,
          isAdmin: result.isAdmin,
        };
      });

      this.listData = usuarioList;

      this.setState({
        isLoading: false,
        usuarioList,
        nome: data.nome,
      });
    }
    getUsuarios();
  }, []);

 

  return (
    <div className="pg-container">
      <section className="secao-usuarios">
        <ListHeader
          paginaAtual="usuarios"
          onClick={() => navigate("/usuarios/novo")}
        />

        

        <UsuarioList />
      </section>
    </div>
  );
};

export default UsuarioListPage;
