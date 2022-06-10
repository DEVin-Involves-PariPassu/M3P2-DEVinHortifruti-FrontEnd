import React, { useEffect, useState } from "react";
import api from "utils/api";
import { priceFormat } from "utils/priceFormat";
import {
  Modal,
  Box,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

function DetalhesVenda({ aberto, handleFechar, idVenda, ...props }) {
  const [venda, setVenda] = useState({});

  useEffect(() => {
    async function pegarVenda() {
      try {
        const { data } = await api.get(`/vendas/${idVenda}`);
        setVenda(data);
      } catch (e) {
        console.error(e.message);
      }
    }
    pegarVenda();
  }, []);

  console.log(venda);

  return (
    <Modal open={aberto} onClose={handleFechar}>
      <div className="modal-venda-tamanho">
        {Object.keys(venda).length !== 0 ? (
          <Box>
            <div className="modal-informacoes-comprador">
              <Typography
                id="comprador"
                variant="h6"
                component="h2"
                sx={{
                  fontFamily: "Squada One",
                  fontSize: "1.3rem",
                  fontWeight:'lighter'
                }}
              >
                Comprador: {venda.nomeCliente}
              </Typography>
              <Typography id="cpf" variant="h6" component="h2" sx={{
                  fontFamily: "Squada One",
                  fontSize: "1.3rem",
                  fontWeight:'lighter'
                }}>
                CPF: {venda.cpf}
              </Typography>
              <Typography id="email" variant="h6" component="h2" sx={{
                  fontFamily: "Squada One",
                  fontSize: "1.3rem",
                  fontWeight:'lighter'
                }}>
                Email: {venda.email}
              </Typography>
              <Typography id="comprador" variant="h6" component="h2" sx={{
                  fontFamily: "Squada One",
                  fontSize: "1.3rem",
                  fontWeight:'lighter'
                }}>
                Telefone: {venda.telefone}
              </Typography>
            </div>
            <div className="modal-total-venda">
              <Typography id="comprador" variant="h6" component="h2"sx={{
                  fontFamily: "Exo",
                  fontSize: "1.2rem",
                  fontWeight:'bold'
                }}>
                Total da venda: {priceFormat(venda.totalVenda)}
              </Typography>
            </div>
            <Table
              size="small"
              aria-label="Detalhes da venda"
              className="modal-tabela"
            >
              <TableHead className="modal-tabela-cabecalho">
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#521e12",
                      fontFamily: "Exo",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    #
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#521e12",
                      fontFamily: "Exo",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    PRODUTO
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#521e12",
                      fontFamily: "Exo",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    QTD
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "#521e12",
                      fontFamily: "Exo",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    SUBTOTAL
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody border="1px solid ">
                {venda.itens.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="item" align="center">
                      <img
                        src={item.urlFoto}
                        alt={item.nome}
                        style={{
                          borderRadius: "50%",
                          width: "80px",
                          height: "80px",
                        }}
                      />
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#521e12",
                        fontFamily: "Exo",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      {item.nome}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#521e12",
                        fontFamily: "Exo",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      {item.quantidade}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "#521e12",
                        fontFamily: "Exo",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      {priceFormat(item.subtotal)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="modal-endereco">
              <Typography
                id="comprador"
                variant="h6"
                component="h2"
                sx={{
                  fontFamily: "Exo",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Endereço: {venda.endereco}
              </Typography>
            </div>
          </Box>
        ) : (
          <Typography
            id="comprador"
            sx={{
              minHeight: "50px",
              width: "200px",
              background: "#4a5926",
              borderRadius: "5px",
              border: "1px solid #4a5926",
              color: "#ffffff",
              fontFamily: "Exo",
              fontSize: "1rem",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            variant="h6"
            component="h2"
          >
            Carregando...
          </Typography>
        )}
      </div>
    </Modal>
  );
}

export default DetalhesVenda;
