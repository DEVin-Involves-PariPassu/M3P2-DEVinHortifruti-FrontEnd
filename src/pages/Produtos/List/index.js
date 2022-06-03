import React from 'react';
import InputBusca from 'components/InputBusca';
import ListHeader from 'components/ListHeader';
import { useState } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { Create, Cancel, CheckCircle } from "@mui/icons-material";
// import { Container } from './styles';

const columns = [
  { id: "1", label: "Produto", minWidth: 100 },
  { id: "valor", label: "Valor", minWidth: 100 },
  {
    id: "status",
    label: "Status",
    minWidth: 70,
    align: "center",
  },
  {
    id: "acao",
    label: "Ações",
    minWidth: 70,
    align: "center",
  },

];

function ProdutoList() {

  const [busca, setBusca] = useState('');
  const onChange = (event) => {

    setBusca(event.target.value);

    const lowerBusca = busca.toLowerCase();

    const resultFilter = this.data.filter((data) => {
      return data.nomeCliente.toLowerCase().includes(lowerBusca);
    });

    this.setState({
      nomeCliente: resultFilter,
    });
  }
  
  const data = [
    {
      id: 1,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "ativa",
    },
    {
      id: 2,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "inativo",
    },
    {
      id: 3,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "ativa",
    },
    {
      id: 4,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "inativo",
    },
    {
      id: 5,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "ativa",
    },
    {
      id: 6,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "ativa",
    },
    {
      id: 7,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "ativa",
    },
    {
      id: 8,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "ativa",
    },
    {
      id: 9,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "ativa",
    },
    {
      id: 10,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "ativa",
    },
    {
      id: 11,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "ativa",
    },
    {
      id: 12,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "ativa",
    },
    {
      id: 13,
      nomeProduto: "Daiana",
      valorPCaixa: "R$ 1476,99",
      status: "ativa",
    },
  ];


  return (<>
  
  <ListHeader paginaAtual="produtos" href="/produtos"></ListHeader>
  <InputBusca placeholder={"Buscar por Produto..."} onChange={onChange}/>

<Paper elevation={3} className="container tabela">
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{bg:'backgroud.extra'}}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .map(({ id, nomeProduto, valorPCaixa, status }) => {
                return (
                  <TableRow key={id} hover role="checkbox" tabIndex={-1}>
                    <TableCell>{nomeProduto}</TableCell>
                    <TableCell>{valorPCaixa}</TableCell>
                    <TableCell align="center">
                      {status === "ativa" && <abbr title="Ativo">
                          <CheckCircle color="info"  />
                          </abbr>}
                      {status === "inativo" && (                                      
                          <abbr title="Inativo">
                          <Cancel color="error"/>
                          </abbr>        
                      )}
                    </TableCell>
                    <TableCell align="center">
                    <abbr title = "Editar produto"><Create color="error"/></abbr>
                
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </>);}

export default ProdutoList;