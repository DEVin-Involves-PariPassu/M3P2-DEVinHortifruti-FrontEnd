import { React, useState, useEffect } from "react";
import "./TableSale.css";
import axios from "axios";
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

import { BsCheckCircleFill } from "react-icons/bs";
import { MdVisibility, MdCancel } from "react-icons/md";

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
  const [vendas, setVendas] = useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function defaultLabelDisplayedRows({ from, to, count }) {
    return `${from}–${to} de ${count !== -1 ? count : `mais ${to}`}`;
  }

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
      cpf: "45812174722",
      nomeCliente: "Lucas",
      valor: "R$ 5355,70",
      status: "ativa",
    },
    {
      id: 9,
      cpf: "51332556531",
      nomeCliente: "Layla",
      valor: "R$ 600,45",
      status: "ativa",
    },
    {
      id: 10,
      cpf: "51332556531",
      nomeCliente: "Layla",
      valor: "R$ 600,45",
      status: "ativa",
    },
  ];

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/vendas")
  //     .then((response) => setVendas(response.data))
  //     .catch(() => alert('Houve um problema ao buscar os dados!'));
  // }, []);

  return (
    <Paper elevation={3} className="container tabela">
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table>
          <TableHead color='variant'>
            <TableRow color='variant' >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  
                  sx={{ minWidth: column.minWidth, fontFamily: 'Exo', fontSize: '1rem', fontWeight: 'bold', color:"#4A5926" }}
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
                  <TableRow key={id} hover role="checkbox" tabIndex={-1} >
                    <TableCell style={{ color:'#4A5926', fontFamily: 'Exo', fontSize: '0.8rem' }}>{cpf}</TableCell>
                    <TableCell sx={{ color:'#4A5926', fontFamily: 'Exo', fontSize: '0.9rem'  }}>{nomeCliente}</TableCell>
                    <TableCell style={{ color:'#4A5926', fontFamily: 'Exo' , fontSize: '0.8rem' }}>{valor}</TableCell>
                    <TableCell align="center">
                      {status === "cancelada" && (
                        <abbr title="Visualizar Venda">
                          <MdVisibility size={'18px'} color={'#D06618'}/>
                        </abbr>
                      )}
                      {status === "ativa" && (
                        <>
                          <abbr title="Visualizar Venda">
                            <MdVisibility size={'18px'} color={'#D06618'} style={{marginRight: '5px'}}/>
                          </abbr>
                          <abbr title="Cancelar Venda">
                            <MdCancel size={'18px'} color={'#521E12'}/>
                          </abbr>
                        </>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {status === "cancelada" && (
                        <abbr title="Venda Cancelada">
                          <MdCancel size={'18px'} color={'#521E12'}/>
                        </abbr>
                      )}
                      {status === "ativa" && (
                        <abbr title="Venda Ativa">
                          <BsCheckCircleFill size={'15px'} color={'#36A23F'}/>
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
        style={{color: '#4A5926', fontFamily:'Exo' }}
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
