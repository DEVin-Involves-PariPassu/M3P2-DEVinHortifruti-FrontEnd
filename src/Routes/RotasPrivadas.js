import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import ProdutoList from '../pages/Produtos/List';
import ProdutoForm from 'pages/Produtos/Form';
import UsuarioForm from 'pages/Usuarios/Form';
import UsuarioList from 'pages/Usuarios/List';
import Carrinho from '../pages/Vendas/Form/Carrinho';
import Comprador from 'pages/Vendas/Form/Comprador';
import DadosEntrega from '../pages/Vendas/Form/DadosEntrega';
import Resumo from 'pages/Vendas/Form/Resumo';
import VendaList from 'pages/Vendas/List';

// import { Container } from './styles';

function RotasPrivadas() {
  return (
    <Switch>
      <Route exact path="/produtos" element={<ProdutoList />} />
      <Route exact path="/produtos/novo" element={<ProdutoForm />} />
      <Route exact path="/produtos/:id" element={<ProdutoForm />} />
      <Route exact path="/usuarios" element={<UsuarioList />} />
      <Route exact path="/usuarios/novo" element={<UsuarioForm />} />
      <Route exact path="/vendas" element={<VendaList />} />
      <Route exact path="/vendas/novo/carrinho" element={<Carrinho />} />
      <Route exact path="/vendas/novo/comprador" element={<Comprador />} />
      <Route
        exact
        path="/vendas/novo/dadosEntrega"
        element={<DadosEntrega />}
      />
      <Route exact path="/vendas/novo/resumo" element={<Resumo />} />
    </Switch>
  );
}

export default RotasPrivadas;
