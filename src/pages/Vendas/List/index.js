import { React, useState } from "react";

import TableSale from "../../../components/TableSale";
import ListHeader from "../../../components/ListHeader";
import InputSearch from "components/InputSearch";

import { useNavigate } from "react-router";

function VendaList() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/vendas/novo/comprador");
  }

  const [busca, setBusca] = useState([]);
  const handleChange = (e) => {
    if(e.InputSearch.value === ""){
      return busca;
    }
    setBusca(e.InputSearch.value.toLowerCase());
    console.log(busca);
    return busca;
  };

  return (
    <div className="pg-container">
      <div className="secao">
        <section className="secao vendas">
          <ListHeader paginaAtual="vendas" onClick={handleClick}></ListHeader>
          <InputSearch placeholder={"Buscar por Cliente ..."} />
          <TableSale filter = {handleChange}/>
        </section>
      </div>
    </div>
  );
}

export default VendaList;
