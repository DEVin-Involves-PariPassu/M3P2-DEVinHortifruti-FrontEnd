import "./style.css";
import React from "react";
import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

function NovaVendaResumo({ itens }) {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="center">Produto</TableCell>
              <TableCell align="center">QTD</TableCell>
              <TableCell align="center">SubTotal</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itens.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{item.imagem}</TableCell>
                <TableCell align="center">{item.nome}</TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                    onClick={() => setQuantidade(quantidade - 1)}
                  >
                    <MdRemoveCircleOutline size={25} />
                  </IconButton>
                  {quantidade}
                  <IconButton
                    size="small"
                    onClick={() => setQuantidade(quantidade + 1)}
                  >
                    <MdAddCircleOutline size={25} />
                  </IconButton>
                </TableCell>
                <TableCell align="center">{item.subtotal}</TableCell>
                <TableCell align="center">{item.botaoDeletar}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default NovaVendaResumo;
