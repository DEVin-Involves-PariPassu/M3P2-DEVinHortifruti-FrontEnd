import { React, useState, useEffect } from "react";
import "./TableSale.css";
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
import DetalhesVenda from "components/DetalhesVenda";

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
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [idVendaDetalhada, setIdVendaDetalhada] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCancel = (event) => {
    if (event) {
      alert("Deseja mesmo cancelar a venda?");
      // se confirmar atualizar venda para cancelada
      setCancelar(true);
      //atualizar data.vendaCancelada === true e renderizar os ícones de forma diferente
    }
    //se desistir retornar
  };

  function handleAbrirModal(idVenda){
    setIdVendaDetalhada(idVenda);
    setModalEstaAberto(true);
  }

  function handleFecharModal(){
    setModalEstaAberto(false);
  }

  function defaultLabelDisplayedRows({ from, to, count }) {
    return `${from}–${to} de ${count !== -1 ? count : `mais ${to}`}`;
  }

  useEffect(() => {
    api
      .get("/vendas")
      .then((response) => setVendas(response.data.vendas))
      .catch(() => alert("Houve um problema ao buscar os dados!"));
  }, []);

  console.log(vendas)
  console.log(idVendaDetalhada)

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
            {vendas
              // .filter((venda) => {
              //   if (filter === "") {
              //     return venda;
              //   } else if (filter !== ""){
              //     return venda.nomeCliente.toLowerCase().includes(filter);
              //   }
              // })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((venda) => {
                return (
                  <TableRow key={venda.id} hover role="checkbox" tabIndex={-1}>
                    <TableCell
                      style={{
                        color: "#4A5926",
                        fontFamily: "Exo",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                      }}
                    >
                      {venda.cpf}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#4A5926",
                        fontFamily: "Exo",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                      }}
                    >
                      {venda.nomeCliente}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#4A5926",
                        fontFamily: "Exo",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                      }}
                    >
                      {venda.totalVenda}
                    </TableCell>
                    <TableCell align="center">
                      {venda.vendaCancelada === true && (
                        <IconButton
                          aria-label="Visualizar"
                          sx={{
                            ":hover": { background: "#C4CAAF" },
                          }}
                          onClick={(id) => handleAbrirModal(venda.id)}
                        >
                          <abbr title="Visualizar Venda">
                            <MdVisibility size={"18px"} color={"#D06618"} />
                          </abbr>
                        </IconButton>
                      )}
                      {venda.vendaCancelada === false && (
                        <>
                          <IconButton
                            aria-label="Visualizar"
                            sx={{
                              ":hover": { background: "#C4CAAF" },
                            }}
                            onClick={(id) => handleAbrirModal(venda.id)}
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
                      {venda.vendaCancelada === true && (
                        <abbr title="Venda Cancelada">
                          <MdCancel size={"18px"} color={"#521E12"} />
                        </abbr>
                      )}
                      {venda.vendaCancelada === false && (
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
        count={vendas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Vendas por página"
        labelDisplayedRows={defaultLabelDisplayedRows}
      />
      {modalEstaAberto && <DetalhesVenda 
        aberto={modalEstaAberto}
        handleFechar={handleFecharModal}
        idVenda={idVendaDetalhada}
      />}
    </Paper>
  );
}
