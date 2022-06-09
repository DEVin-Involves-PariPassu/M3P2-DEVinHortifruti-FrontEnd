import { React, useState } from "react";
import "./ListSale.css";

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
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setBusca(e.target.value);

    console.log(busca);
    const lowerBusca = busca.toLowerCase();

    const resultFilter = data.filter((data) => {
      return data.nomeCliente.toLowerCase().includes(lowerBusca);
    });

    setData(resultFilter);
    // this.setState({
    //   nomeCliente: resultFilter,
    // });
  };

  return (
    <div className="pg secao">
      <div className="secao">
        <section className="secao vendas">
          <ListHeader paginaAtual="vendas" onClick={handleClick}></ListHeader>
          <InputSearch placeholder={"Buscar por Cliente ..."} />
          <TableSale onChange={handleChange} />
        </section>
      </div>
    </div>
  );
}

export default VendaList;
