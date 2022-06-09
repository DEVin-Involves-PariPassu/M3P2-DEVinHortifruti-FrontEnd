import { React, useState, useEffect } from "react";
import "./TableSale.css";
import axios from "axios";
import api from "utils/api";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  IconButton,
} from "@mui/material";

import { BsCheckCircleFill } from "react-icons/bs";
import { MdVisibility, MdCancel } from "react-icons/md";

const columns = [
  { id: "cpf", label: "CPF", minWidth: 100 },
  { id: "cliente", label: "CLIENTE", minWidth: 100 },
  {
    id: "valor",
    label: "VALOR",
    minWidth: 90,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "acao",
    label: "AÇÕES",
    minWidth: 70,
    align: "center",
  },
  {
    id: "status",
    label: "STATUS",
    minWidth: 70,
    align: "center",
  },
];

export default function TableSales(filter) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [vendas, setVendas] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [cancelar, setCancelar] = useState(false);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCancel = (event)=>{
    if(event){
      alert('Deseja mesmo cancelar a venda?')
      // se confirmar atualizar venda para cancelada
      setCancelar(true);
      //atualizar data.vendaCancelada === "true" e renderizar os ícones de forma diferente
    }
    //se desistir retornar   
  }

  function defaultLabelDisplayedRows({ from, to, count }) {
    return `${from}–${to} de ${count !== -1 ? count : `mais ${to}`}`;
  }

  const data = [
    {
      id: 1,
      cpf: "12345678910",
      nomeCliente: "Daiana",
      totalVenda: "R$ 1476,99",
      vendaCancelada: "false",
    },
    {
      id: 2,
      cpf: "10254886523",
      nomeCliente: "Diego",
      totalVenda: "R$ 10599,85",
      vendaCancelada: "false",
    },
    {
      id: 3,
      cpf: "01865932114",
      nomeCliente: "Kaly",
      totalVenda: "R$ 3625,00",
      vendaCancelada: "false",
    },
    {
      id: 4,
      cpf: "56980174722",
      nomeCliente: "Cris",
      totalVenda: "R$ 453,97",
      vendaCancelada: "true",
    },
    {
      id: 5,
      cpf: "11247896531",
      nomeCliente: "Camilla",
      totalVenda: "R$ 1006,85",
      vendaCancelada: "true",
    },
    {
      id: 6,
      cpf: "45812174722",
      nomeCliente: "Lucas",
      totalVenda: "R$ 5355,70",
      vendaCancelada: "false",
    },
    {
      id: 7,
      cpf: "51332556531",
      nomeCliente: "Layla",
      totalVenda: "R$ 600,45",
      vendaCancelada: "false",
    },
    {
      id: 8,
      cpf: "45812174722",
      nomeCliente: "Lucas",
      totalVenda: "R$ 5355,70",
      vendaCancelada: "false",
    },
  ];

  // useEffect(() => {
  //   api
  //     .get('/vendas')
  //     .then((response) => setVendas(response.data))
  //     .catch(() => alert('Houve um problema ao buscar os dados!'));
  // }, []);

  return (
    <Paper elevation={3} className="secao tabela">
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader area-label="sticky Table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    minWidth: column.minWidth,
                    fontFamily: "Exo",
                    background: "#FFFFFF",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#4A5926",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {vendas */}
            {data
              .filter((data) => {
                if (filter !== "") {
                  return data;
                } else if (filter !== ""){
                  return data.nomeCliente.toLowerCase().includes(filter);
                }
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                return (
                  <TableRow key={data.id} hover role="checkbox" tabIndex={-1}>
                    <TableCell
                      style={{
                        color: "#4A5926",
                        fontFamily: "Exo",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                      }}
                    >
                      {data.cpf}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#4A5926",
                        fontFamily: "Exo",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                      }}
                    >
                      {data.nomeCliente}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#4A5926",
                        fontFamily: "Exo",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                      }}
                    >
                      {data.totalVenda}
                    </TableCell>
                    <TableCell align="center">
                      {data.vendaCancelada === "true" && (
                        <IconButton
                          aria-label="Visualizar"
                          sx={{
                            ":hover": { background: "#C4CAAF" },
                          }}
                        >
                          <abbr title="Visualizar Venda">
                            <MdVisibility size={"18px"} color={"#D06618"} />
                          </abbr>
                        </IconButton>
                      )}
                      {data.vendaCancelada === "false" && (
                        <>
                          <IconButton
                            aria-label="Visualizar"
                            sx={{
                              ":hover": { background: "#C4CAAF" },
                            }}
                            
                          >
                            <abbr title="Visualizar Venda">
                              <MdVisibility size={"18px"} color={"#D06618"} />
                            </abbr>
                          </IconButton>
                          <IconButton
                            aria-label="Cancelar Venda"
                            sx={{
                              ":hover": { background: "#C4CAAF" },
                            }}
                            onClick={handleCancel}
                          >
                            <abbr title="Cancelar Venda">
                              <MdCancel size={"18px"} color={"#521E12"} />
                            </abbr>
                          </IconButton>
                        </>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {data.vendaCancelada === "true" && (
                        <abbr title="Venda Cancelada">
                          <MdCancel size={"18px"} color={"#521E12"} />
                        </abbr>
                      )}
                      {data.vendaCancelada === "false" && (
                        <abbr title="Venda Ativa">
                          <BsCheckCircleFill size={"15px"} color={"#36A23F"} />
                        </abbr>
                      )}
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
        sx={{ color: "#4A5926", fontFamily: "Exo" }}
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
