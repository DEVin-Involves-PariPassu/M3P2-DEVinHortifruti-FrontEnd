import React from "react";
import UsuarioForm from "components/UsuarioForm";
import FormHeader from "components/FormHeader";
import FormButtons from "components/FormButtons";

export default function UsuarioFormPage() {
  return (
    <div className="pg-container">
      <section className="secao-usuarios">
        <FormHeader paginaAtual="usuarios/novo" />
        <UsuarioForm />
        <FormButtons />
      </section>
    </div>
  );
}
