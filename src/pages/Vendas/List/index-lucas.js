import { Button } from '@mui/material';
import DetalhesVenda from 'components/DetalhesVenda';
import React, { useState } from 'react';

// import { Container } from './styles';

function VendaList() {
  //const [vendas, setVendas] = useState([]);
  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  function handleAbrirModal(){
    setModalEstaAberto(true);
  }

  function handleFecharModal(){
    setModalEstaAberto(false);
  }

  return (
  <>
    <Button onClick={handleAbrirModal}>
      Abrir modal
    </Button>
    {modalEstaAberto && <DetalhesVenda 
      aberto={modalEstaAberto}
      handleFechar={handleFecharModal}
      idVenda={1}
    />}
  </>)
}

export default VendaList;