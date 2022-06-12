import React from "react";
import ListHeader from "components/ListHeader";
import { useNavigate } from "react-router-dom";
import TableProducts from "components/TableProducts";

function ProdutoList() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/produtos/novo");
  }

  return (
    <div className="pg-container">
      <div className="secao">
        <section className="secao-produtos">
          <ListHeader paginaAtual="produtos" onClick={handleClick} />
         <TableProducts />
        </section>
      </div>
    </div>
  );
}

export default ProdutoList;