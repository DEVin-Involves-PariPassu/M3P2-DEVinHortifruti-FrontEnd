import {React, useState} from "react";
import "./ListSale.css";

import TableSale from "../../../components/TableSale";
import InputBusca from "../../../components/InputBusca";
import ListHeader from "../../../components/ListHeader";
import { Container } from "@mui/system";

function VendaList() {
  const [busca, setBusca]= useState('');
  const onChange= (event) => {
     
    setBusca(event.target.value);

    const lowerBusca = busca.toLowerCase();

    const resultFilter = this.data.filter((data) => {
      return data.nomeCliente.toLowerCase().includes(lowerBusca);
    });

    this.setState({
      nomeCliente: resultFilter,
    });
  }
 
  return (
    <div className="container">
      <Container sx={{ color: 'text.main', bgcolor: 'primary.main', width:'15%', height: '100%' }}>
        <h1>Aqui vai o menu de navegação</h1>
      </Container>
      
      <section className="container vendas">
        <ListHeader paginaAtual="vendas" href={"/vendas"}></ListHeader>
        <InputBusca placeholder={"Buscar por Cliente ..."} onChange={onChange}/>
        <TableSale />
      </section>
    </div>
  );
}

export default VendaList;
