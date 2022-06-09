import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FiUserCheck, FiUserX } from "react-icons/fi";
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

const data = [
  {
    id: 1,
    nome: "Lucas Bueno",
    email: "bueno@gmail.com",
    dtNascimento: "01/01/2022",
    isAdmin: "true",
  },
  {
    id: 2,
    nome: "Daiana Michels",
    email: "daiana@gmail.com",
    dtNascimento: "03/03/2022",
    isAdmin: "true",
  },
  {
    id: 3,
    nome: "Kalyana Greim",
    email: "kaly@gmail.com",
    dtNascimento: "07/04/2022",
    isAdmin: "false",
  },
  {
    id: 4,
    nome: "Camilla Amaral",
    email: "camilla@gmail.com",
    dtNascimento: "11/09/2022",
    isAdmin: "false",
  },
  {
    id: 5,
    nome: "Félix Colombo",
    email: "felix@gmail.com",
    dtNascimento: "01/07/2022",
    isAdmin: "true",
  },
];

export default function UsuarioList() {
  return (
    <>
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
              {data.map(({ id, nome, email, dtNascimento, isAdmin }) => {
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
                      {isAdmin === "true" && (
                        <abbr title="Sim">
                          <FiUserCheck color="#36A23F" size="20px" />
                        </abbr>
                      )}
                      {isAdmin === "false" && (
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
