import { React, useState } from "react";
import "./ListSale.css";

import TableSale from "../../../components/TableSale";
import ListHeader from "../../../components/ListHeader";
import { Container } from "@mui/system";
import InputSearch from "components/InputSearch";

const columns = [
  { id: "cpf", label: "CPF", minWidth: 100 },
  { id: "cliente", label: "Cliente", minWidth: 100 },
  {
    id: "valor",
    label: "Valor",
    minWidth: 90,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "acao",
    label: "Ações",
    minWidth: 70,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 70,
    align: "center",
  },
];

function VendaList() {
  const [busca, setBusca] = useState("");
  const onChange = () => {
    setBusca(InputSearch.value);

    const lowerBusca = busca.toLowerCase();

    const resultFilter = this.vendas.filter((data) => {
      return data.nomeCliente.toLowerCase().includes(lowerBusca);
    });

    this.setState({
      nomeCliente: resultFilter,
    });
  };


  return (
    <div className="container">
      <Container
        sx={{
          color: "text.main",
          bgcolor: "primary.main",
          width: "15%",
          height: "100%",
        }}
      >
        <h1>Aqui vai o menu de navegação</h1>
      </Container>

      <section className="container vendas">
        <ListHeader paginaAtual="vendas" onClick={""}></ListHeader>
        <InputSearch
          placeholder={"Buscar por Cliente ..."}
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <TableSale onChange={onChange} />
      </section>
    </div>
  );
}

export default VendaList;
