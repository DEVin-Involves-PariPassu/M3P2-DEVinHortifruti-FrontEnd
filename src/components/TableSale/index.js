import { React, useState, useEffect } from "react";
import "./TableSale.css";
import api from "utils/api";
import { priceFormat } from "utils/priceFormat";
import InputSearch from "components/InputSearch";
import { authState } from "store/modules/auth/recoil";
import { useRecoilValue } from "recoil";
import { isAdminState } from 'store/modules/auth/recoil';

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

export default function TableSales() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [vendas, setVendas] = useState([]);
  const [cancelar, setCancelar] = useState(false);
  const [search, setSearch] = useState("");
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [idVendaDetalhada, setIdVendaDetalhada] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCancel = (idVenda) => {
    setIdVendaDetalhada(idVenda);

    let confirmacao = window.confirm("Deseja mesmo cancelar a venda?");

    if (confirmacao === true) {
      setCancelar(true);
      if (idVenda) {
        api
          .put(`http://localhost:8081/vendas/${idVenda}`)
          .then(() => {
            alert("Venda cancelada!");
            setCancelar(false);
          })
          .catch(() =>
            alert("Houve um problema ao atualizar o status da venda!")
          );
      }
    } else if (confirmacao === false) {
      setCancelar(false);
    }
  };

  function handleAbrirModal(idVenda) {
    setIdVendaDetalhada(idVenda);
    setModalEstaAberto(true);
  }

  function handleFecharModal() {
    setModalEstaAberto(false);
  }

  function defaultLabelDisplayedRows({ from, to, count }) {
    return `${from}–${to} de ${count !== -1 ? count : `mais ${to}`}`;
  }

  const token = useRecoilValue(authState);
  api.defaults.headers.Authorization = `Bearer ${token}`;
  const isAdmin = useRecoilValue(isAdminState);

  useEffect(() => {
    api
      .get("/vendas")
      .then((response) => {
        setVendas(response.data.vendas);
      })
      .catch(() => alert("Houve um problema ao buscar os dados!"));
  }, [cancelar]);

  return (
    <>
      <InputSearch
        placeholder={"Buscar por nome do comprador..."}
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      ></InputSearch>
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
                .filter((venda) => {
                  if (search === "") {
                    return venda;
                  } else if (search !== "") {
                    return venda.nomeCliente
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  }
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((venda) => {
                  return (
                    <TableRow
                      key={venda.id}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                    >
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
                        {priceFormat(venda.totalVenda)}
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
                              onClick={(id) => handleCancel(venda.id)}
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
                            <BsCheckCircleFill
                              size={"15px"}
                              color={"#36A23F"}
                            />
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
        {modalEstaAberto && (
          <DetalhesVenda
            aberto={modalEstaAberto}
            handleFechar={handleFecharModal}
            idVenda={idVendaDetalhada}
          />
        )}
      </Paper>
    </>
  );
}
