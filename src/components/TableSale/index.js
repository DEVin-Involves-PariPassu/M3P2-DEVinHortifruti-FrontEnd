import React from "react";
import { useState } from "react";
import "./TableSale.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
} from "@mui/material";

import { Visibility, Cancel, CheckCircle } from "@mui/icons-material";

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

export default function TableSales() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [busca, setBusca] = useState({})
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function defaultLabelDisplayedRows({ from, to, count }) 
  { return `${from}–${to} de ${count !== -1 ? count : `mais ${to}`}`; }

  const data = [
    {
      id: 1,
      cpf: "12345678910",
      nomeCliente: "Daiana",
      valor: "R$ 1476,99",
      status: "ativa",
    },
    {
      id: 2,
      cpf: "10254886523",
      nomeCliente: "Diego",
      valor: "R$ 10599,85",
      status: "ativa",
    },
    {
      id: 3,
      cpf: "01865932114",
      nomeCliente: "Kaly",
      valor: "R$ 3625,00",
      status: "ativa",
    },
    {
      id: 4,
      cpf: "56980174722",
      nomeCliente: "Cris",
      valor: "R$ 453,97",
      status: "cancelada",
    },
    {
      id: 5,
      cpf: "11247896531",
      nomeCliente: "Camilla",
      valor: "R$ 1006,85",
      status: "cancelada",
    },
    {
      id: 6,
      cpf: "45812174722",
      nomeCliente: "Lucas",
      valor: "R$ 5355,70",
      status: "ativa",
    },
    {
      id: 7,
      cpf: "51332556531",
      nomeCliente: "Layla",
      valor: "R$ 600,45",
      status: "ativa",
    },
    {
      id: 8,
      cpf: "42577914112",
      nomeCliente: "Bruno",
      valor: "R$ 999,90",
      status: "ativa",
    },
    {
      id: 9,
      cpf: "01237896531",
      nomeCliente: "Kate",
      valor: "R$ 100,00",
      status: "ativa",
    },
    {
      id: 10,
      cpf: "88680174722",
      nomeCliente: "Carlos",
      valor: "R$ 455,77",
      status: "cancelada",
    },
    {
      id: 11,
      cpf: "10247776531",
      nomeCliente: "Douglas",
      valor: "R$ 122,40",
      status: "cancelada",
    },
    {
      id: 12,
      cpf: "11980224722",
      nomeCliente: "Danilo",
      valor: "R$ 7530,97",
      status: "ativa",
    },
    {
      id: 13,
      cpf: "31247556531",
      nomeCliente: "Julia",
      valor: "R$ 106,50",
      status: "ativa",
    },
  ];
  return (
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
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ id, nomeCliente, cpf, valor, status }) => {
                return (
                  <TableRow key={id} hover role="checkbox" tabIndex={-1}>
                    <TableCell>{cpf}</TableCell>
                    <TableCell>{nomeCliente}</TableCell>
                    <TableCell>{valor}</TableCell>
                    <TableCell align="center">
                      {status === "cancelada" && <abbr title="Visualizar Venda">
                          <Visibility color="info"  />
                          </abbr>}
                      {status === "ativa" && (
                        <>
                        <abbr title="Visualizar Venda">
                          <Visibility color="info"  />
                          </abbr>
                          <abbr title="Cancelar Venda">
                          <Cancel color="error"/>
                          </abbr>
                        </>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {status === "cancelada" && <abbr title="Venda Cancelada"><Cancel color="error"/></abbr>}
                      {status === "ativa" && <abbr title="Venda "><CheckCircle color="primary" /></abbr>}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Vendas por página"
        labelDisplayedRows={defaultLabelDisplayedRows}
      />
    </Paper>
  );
}
