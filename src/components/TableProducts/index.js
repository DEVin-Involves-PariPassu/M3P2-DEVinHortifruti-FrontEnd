import React from "react";
import { useState, useEffect } from "react";
import api from "utils/api";
import InputSearch from "components/InputSearch";
import { MdEdit } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { priceFormat } from "utils/priceFormat";
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
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: "1", label: "ID", minWidth: 60 },
  { id: "nome", label: "PRODUTO", minWidth: 100 },
  { id: "valor", label: "VALOR", minWidth: 100 },
  {
    id: "status",
    label: "STATUS",
    minWidth: 70,
    align: "center",
  },
  {
    id: "acao",
    label: "AÇÕES",
    minWidth: 70,
    align: "center",
  },
];

function TableProducts() {
  let navigate = useNavigate();

  const [produto, setProduto] = useState([]);
  const [search, setSearch] = useState("");

  const token = useRecoilValue(authState);
  api.defaults.headers.Authorization = `Bearer ${token}`;

  const isAdmin = useRecoilValue(isAdminState);

  useEffect(() => {
    api
      .get("/produto")
      .then((response) => setProduto(response.data.content))
      .catch(() => alert("Houve um problema ao buscar os dados!"));
  }, []);

  return (<>
          <InputSearch
            placeholder={"Buscar por nome do produto..."}
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          ></InputSearch>

          <Paper elevation={3} className="secao tabela">
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table
                stickHeader
                aria-label="sticky table"
                sx={{
                  color: "#4A5926",
                  fontFamily: "Exo",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                <TableHead sx={{ bg: "backgroud.extra" }}>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        sx={{
                          minWidth: column.minWidth,
                          fontFamily: "Exo",
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
                <TableBody sx={{ maxHeight: 600, color: "#36A23F" }}>
                  {produto
                    .filter((produtos) => {
                      if (search === "") {
                        return produtos;
                      } else if (search !== "") {
                        return produtos.nome
                          .toLowerCase()
                          .includes(search.toLowerCase());
                      }
                    })
                    .map(({ id, nome, precoSugerido, ativo }) => {
                      return (
                        <TableRow key={id} hover role="checkbox" tabIndex={-1}>
                          <TableCell
                            style={{
                              color: "#4A5926",
                              fontFamily: "Exo",
                              fontSize: "0.8rem",
                              fontWeight: "bold",
                            }}
                          >
                            {id}
                          </TableCell>
                          <TableCell
                            style={{
                              color: "#4A5926",
                              fontFamily: "Exo",
                              fontSize: "0.8rem",
                              fontWeight: "bold",
                            }}
                          >
                            {nome}
                          </TableCell>
                          <TableCell
                            style={{
                              color: "#4A5926",
                              fontFamily: "Exo",
                              fontSize: "0.8rem",
                              fontWeight: "bold",
                            }}
                          >
                            {priceFormat(precoSugerido)}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{
                              color: "#4A5926",
                              fontFamily: "Exo",
                              fontSize: "0.8rem",
                              fontWeight: "bold",
                            }}
                          >
                            {ativo === true && (
                              <abbr title="Ativo">
                                <BsCheckCircleFill color="#36A23F" />
                              </abbr>
                            )}
                            {ativo === false && (
                              <abbr title="Inativo">
                                <MdCancel color="#521E12" size="16px" />
                              </abbr>
                            )}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{
                              color: "#4A5926",
                              fontFamily: "Exo",
                              fontSize: "0.8rem",
                              fontWeight: "bold",
                            }}
                          >
                            <abbr title="Editar produto">
                              <IconButton
                                onClick={() => navigate(`/produtos/${id}`)}
                                sx={{ ":hover": { background: "#C4CAAF" } }}
                              >
                                <MdEdit
                                  color="#D06618"
                                  className="botao-editar"
                                />
                              </IconButton>
                            </abbr>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          </>
  );
}

export default TableProducts;