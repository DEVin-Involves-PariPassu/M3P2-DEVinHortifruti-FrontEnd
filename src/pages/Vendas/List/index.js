import { React } from "react";

import TableSale from "../../../components/TableSale";
import ListHeader from "../../../components/ListHeader";

import { useNavigate } from "react-router";

function VendaList() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/vendas/novo/comprador");
  }

  return (
    <div className="pg-container">
      <div className="secao">
        <section className="secao vendas">
          <ListHeader paginaAtual="vendas" onClick={handleClick}></ListHeader>
          <TableSale />
        </section>
      </div>
    </div>
  );
}

export default VendaList;
