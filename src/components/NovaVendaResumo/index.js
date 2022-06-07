import "./style.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import {
  MdDeleteForever,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

const NovaVendaResumo = (onClick) => {
  function createData(imagem, produto, quantidade, subtotal, deletar) {
    return { imagem, produto, quantidade, subtotal, deletar };
  }
  const rows = [
    createData(
      <img
        className="imagemProduto"
        src="https://images.vexels.com/media/users/3/139632/isolated/lists/7964ff194a715e6d156278a0bf0088a2-desenho-de-banana.png"
      ></img>,
      "banana",
      1,
      4,
      <IconButton aria-label="deletar produto" size="large" onClick={onClick}>
        <MdDeleteForever size={25} color="red" />
      </IconButton>
    ),
    createData(
      <img
        className="imagemProduto"
        src="https://4.bp.blogspot.com/-KHuS43cVqDw/Vdj7D_YwARI/AAAAAAABHQU/otVA6QO0Bvw/s1600/MA%25C3%2587%25C3%2583.png"
      ></img>,
      "maçã",
      9,
      37,
      <IconButton aria-label="deletar produto" size="large" onClick={onClick}>
        <MdDeleteForever size={25} color="red" />
      </IconButton>
    ),
  ];
  return (
    <>
      <div className="container">
        <section className="cabecalho">
          <h1>Nova venda: Resumo</h1>
          <h3>Comprador: Henrique Douglas</h3>
          <h3>CPF: 123.456.789-12</h3>
        </section>

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
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.imagem}
                  </TableCell>
                  <TableCell align="center">{row.produto}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="remover unidade"
                      size="small"
                      onClick={onClick}
                    >
                      <MdRemoveCircleOutline size={25} />
                    </IconButton>
                    {row.quantidade}
                    <IconButton
                      aria-label="adicionar unidade"
                      size="small"
                      onClick={onClick}
                    >
                      <MdAddCircleOutline size={25} />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">{row.subtotal}</TableCell>
                  <TableCell align="center">{row.deletar}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <section className="rodape">
          <h1>Total: R$123</h1>
          <Button variant="contained" size="small" onClick={onClick}>
            Confirmar
          </Button>
        </section>
      </div>
    </>
  );
};

export default NovaVendaResumo;
