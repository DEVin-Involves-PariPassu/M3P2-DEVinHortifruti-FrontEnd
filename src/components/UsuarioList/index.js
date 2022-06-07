import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "nome", headerName: "Nome", width: 230 },
  { field: "email", headerName: "E-mail", width: 230 },
  {
    field: "dtNascimento",
    headerName: "Data de Nasc.",
    type: "date",
    width: 110,
  },
  {
    field: "isAdmin",
    headerName: "Admin",
    width: 80,
  },
  {
    field: "acoes",
    headerName: "Ações",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    nome: "Lucas Bueno",
    email: "bueno@gmail.com",
    dtNascimento: "01/01/2022",
    isAdmin: "sim",
  },
  {
    id: 2,
    nome: "Daiana Michels",
    email: "daiana@gmail.com",
    dtNascimento: "03/03/2022",
    isAdmin: "não",
  },
  {
    id: 3,
    nome: "Kalyana Greim",
    email: "kaly@gmail.com",
    dtNascimento: "07/04/2022",
    isAdmin: "não",
  },
  {
    id: 4,
    nome: "Camilla Amaral",
    email: "camilla@gmail.com",
    dtNascimento: "11/09/2022",
    isAdmin: "não",
  },
  {
    id: 5,
    nome: "Félix Colombo",
    email: "felix@gmail.com",
    dtNascimento: "01/07/2022",
    isAdmin: "sim",
  },
];

export default function UsuarioList() {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
}
