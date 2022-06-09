import React, { useEffect, useState } from 'react';
import api from 'utils/api';
import { priceFormat } from 'utils/priceFormat';
import { Modal, Box, Typography, Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';

function DetalhesVenda({aberto, handleFechar, idVenda, ...props}) {

    // const [venda, setVenda] = useState({
    //     nomeCliente: "Lucas Bueno Cesario",
    //     cpf: "12345678901",
    //     email: "lbc92@hotmail.com",
    //     telefone: "48987654321",
    //     totalVenda: 100.99,
    //     endereco: "Rua Professora Rosinha Campos, 427\nAbraão - Florianópolis/SC",
    //     itens: [
    //         {
    //             urlFoto: "https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg",
    //             nome: "Banana",
    //             quantidade: 1,
    //             subtotal: 5.59
    //         }, {
    //             urlFoto: "https://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/maca-argentina1-a86acef532d11addf315221676880019-1024-1024.jpg",
    //             nome: "Maçã",
    //             quantidade: 2,
    //             subtotal: 6.78
    //         }
    //     ]
    //     });
    
    const [venda, setVenda] = useState({});

    useEffect(() => {
        async function pegarVenda(){
            try{
                const {data} = await api.get(`/vendas/${idVenda}`);
                setVenda(data);
            } catch(e){
                console.error(e.message);
            }            
        }
        pegarVenda();
    }, []);

    console.log(venda);

    return <Modal
        open={aberto}
        onClose={handleFechar}
    >
       
        <div className="modal-venda-tamanho">
        {Object.keys(venda).length !== 0 ? 
            <Box>
                <Typography id="comprador" variant="h6" component="h2">
                Comprador: {venda.nomeCliente}
                </Typography>
                <Typography id="cpf" variant="h6" component="h2">
                CPF: {venda.cpf}
                </Typography>
                <Typography id="email" variant="h6" component="h2">
                Email: {venda.email}
                </Typography>
                <Typography id="comprador" variant="h6" component="h2">
                Telefone: {venda.telefone}
                </Typography>
                <Typography id="comprador" variant="h6" component="h2">
                Total da venda: {priceFormat(venda.totalVenda)}
                </Typography>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="Detalhes da venda">
                <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align="right">Produto</TableCell>
                    <TableCell align="right">QTD</TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {venda.itens.map((item, i) => (
                    <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="item">
                        <img width="32" height="32" src={item.urlFoto} alt={item.nome}/>
                    </TableCell>
                    <TableCell align="right">{item.nome}</TableCell>
                    <TableCell align="right">{item.quantidade}</TableCell>
                    <TableCell align="right">{priceFormat(item.subtotal)}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <Typography id="comprador" variant="h6" component="h2">
                {venda.endereco}
            </Typography>
            </Box>
        : <Typography id="comprador" variant="h6" component="h2">
            Carregando...
          </Typography>
        }
        </div> 
    </Modal>
}

export default DetalhesVenda;