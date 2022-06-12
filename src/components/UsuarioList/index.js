import React, { useState, useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import InputSearch from "components/InputSearch";
import api from "utils/api";
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

const columns = [
  { id: "id", label: "ID", minWidth: 20, align: "center" },
  { id: "nome", label: "Nome", minWidth: 190, align: "center" },
  { id: "email", label: "E-mail", minWidth: 190, align: "center" },
  {
    id: "dtNascimento",
    label: "Data de Nasc.",
    type: "date",
    minWidth: 110,
    align: "center",
  },
  {
    id: "isAdmin",
    label: "Admin",
    minWidth: 80,
    align: "center",
  },
  {
    id: "acoes",
    label: "Ações",
    minWidth: 100,
    align: "center",
  },
];

export default function UsuarioList() {
  const [usuario, setUsuario] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/users")
      .then((response) => setUsuario(response.data.content))
      .catch(() => alert("Não foi possível buscar os usuários."));
  }, []);

  return (
    <>
      <InputSearch
        placeholder={"Digite o nome do usuário"}
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
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
              align: "center",
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
                      align: "center",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody sx={{ maxHeight: 600, color: "#36A23F" }}>
              {usuario
                .filter((usuarios) => {
                  if (search === "") {
                    return usuarios;
                  } else if (search !== "") {
                    return usuarios.nome
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  }
                })
                .map(({ id, nome, email, dtNascimento, isAdmin }) => {
                  return (
                    <TableRow key={id} hover role="checkbox" tabIndex={-1}>
                      <TableCell
                        align="center"
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
                        align="center"
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
                        align="center"
                        style={{
                          color: "#4A5926",
                          fontFamily: "Exo",
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                        }}
                      >
                        {email}
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
                        {dtNascimento}
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
                        {isAdmin === true && (
                          <abbr title="Sim">
                            <FiUserCheck color="#36A23F" size="20px" />
                          </abbr>
                        )}
                        {isAdmin === false && (
                          <abbr title="Não">
                            <FiUserX color="#521E12" size="20px" />
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
                        <abbr title="Editar usuário">
                          <IconButton
                            sx={{ ":hover": { background: "#C4CAAF" } }}
                            onClick={() => navigate(`/usuarios/${id}`)}
                          >
                            <MdEdit color="#D06618" />
                            <MdDelete color="#521e12" />
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
