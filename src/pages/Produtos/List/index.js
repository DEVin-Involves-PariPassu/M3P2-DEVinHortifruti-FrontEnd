import React from 'react';
import { useState, useEffect } from 'react';
import api from 'utils/api';
import axios from 'axios';
import ListHeader from 'components/ListHeader';
import InputSearch from 'components/InputSearch';
import {MdEdit} from "react-icons/md"
import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import '../List/style.css';

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
  { id: "1", label: "PRODUTO", minWidth: 100 },
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

function ProdutoList() {

  const [busca, setBusca] = useState('');
  const onChange = (event) => {

    setBusca(event.target.value);

    const lowerBusca = busca.toLowerCase();

    const resultFilter = this.data.filter((data) => {
      return data.nomeCliente.toLowerCase().includes(lowerBusca);
    });

    this.setState({
      nomeCliente: resultFilter,
    });

  }
  // const [produto, setProduto] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/produto")
  //     .then((response) => setProduto(response.data))
  //     .catch(() => alert('Houve um problema ao buscar os dados!'));
  // }, []);

  
  const data = [
    {
      id: 1,
      nome: "Melão",
      precoSugerido: "R$ 1476,99",
      isAtivo: true,
    },
    {
      id: 2,
      nome: "Mamão",
      precoSugerido: "R$ 1476,99",
      isAtivo: true,
    },
    {
      id: 3,
      nome: "Manga",
      precoSugerido: "R$ 1476,99",
      isAtivo: true,
    },
    {
      id: 4,
      nome: "Carambola",
      precoSugerido: "R$ 1476,99",
      isAtivo: false,
    },
    {
      id: 5,
      nome: "Limão",
      precoSugerido: "R$ 1476,99",
      isAtivo: true,
    },
    {
      id: 6,
      nome: "Laranja",
      precoSugerido: "R$ 1476,99",
      isAtivo: false,
    },
    {
      id: 7,
      nome: "Melancia",
      precoSugerido: "R$ 1476,99",
      isAtivo: true,
    },
    {
      id: 8,
      nome: "Pêra",
      precoSugerido: "R$ 1476,99",
      isAtivo: false,
    },
    {
      id: 9,
      nome: "Abacate",
      precoSugerido: "R$ 1476,99",
      isAtivo: true,
    },
    {
      id: 10,
      nome: "Uva",
      precoSugerido: "R$ 1476,99",
      isAtivo: true,
    },
    {
      id: 11,
      nome: "Maçã",
      precoSugerido: "R$ 1476,99",
      isAtivo: false,
    },
    {
      id: 12,
      nome: "Banana",
      precoSugerido: "R$ 1476,99",
      isAtivo: true,
    },
    {
      id: 13,
      nome: "Manga",
      precoSugerido: "R$ 1476,99",
      isAtivo: false,
    },
  ];


  return (<>
  <div className="container"> 
  <section className='container produtos'>
  <ListHeader paginaAtual="produtos" onClick={""}/>
  <InputSearch placeholder={"Buscar por produto..."} onChange={""}/>

<Paper elevation={3} className="container tabela">
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickHeader aria-label="sticky table" sx={{color:'#4A5926', fontFamily: 'Exo', fontSize: '0.8rem', fontWeight:'bold'}}>
          <TableHead sx={{bg:'backgroud.extra'}}>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ minWidth: column.minWidth, fontFamily: 'Exo', fontSize: '1rem', fontWeight: 'bold', color:"#4A5926"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ maxHeight: 600, color: '#36A23F'}} >
            {data
              .map(({ id, nome, precoSugerido, isAtivo }) => {
                return (
                  <TableRow key={id} hover role="checkbox" tabIndex={-1}>
                    <TableCell style={{ color:'#4A5926', fontFamily: 'Exo', fontSize: '0.8rem', fontWeight:'bold' }}>{nome}</TableCell>
                    <TableCell style={{ color:'#4A5926', fontFamily: 'Exo', fontSize: '0.8rem', fontWeight:'bold' }}>{precoSugerido}</TableCell>
                    <TableCell align="center" style={{ color:'#4A5926', fontFamily: 'Exo', fontSize: '0.8rem', fontWeight:'bold' }}>
                      {isAtivo === true && <abbr title="Ativo">
                        <BsCheckCircleFill color='#36A23F'/>                        
                          </abbr>}
                      {isAtivo === false && (                                      
                          <abbr title="Inativo"><MdCancel color="#521E12" size="16px"/>
                          </abbr>        
                      )}
                    </TableCell>
                    <TableCell align="center" style={{ color:'#4A5926', fontFamily: 'Exo', fontSize: '0.8rem', fontWeight:'bold' }}>
                    <abbr title = "Editar produto"><IconButton ><MdEdit color='#D06618'className='botao-editar'/></IconButton></abbr>
                
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </section>
    </div>
    </>);}

export default ProdutoList;