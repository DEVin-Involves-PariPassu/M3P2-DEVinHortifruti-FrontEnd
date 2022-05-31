import React from 'react';
import ProdutoList from '../pages/Produtos/List';
import Carrinho from '../pages/Vendas/Form/Carrinho';
import DadosEntrega from '../pages/Vendas/Form/DadosEntrega';

// import { Container } from './styles';

function RotasPrivadas() {
    return (
        <Switch>
            <Route exact path="/produtos" element={<ProdutoList />}/>
            <Route exact path="/produtos/novo" element={<ProdutoForm />}/>
            <Route exact path="/usuarios" element={<UsuarioList />}/>
            <Route exact path="/usuarios/novo" element={<UsuarioForm />}/>
            <Route exact path="/vendas" element={<VendaList />}/>
            <Route exact path="/vendas/novo/carrinho" element={<Carrinho />}/>
            <Route exact path="/vendas/novo/comprador" element={<Comprador />}/>
            <Route exact path="/vendas/novo/dadosEntrega" element={<DadosEntrega />}/>
            <Route exact path="/vendas/novo/resumo" element={<Resumo />}/>
        </Switch>
    )
}

export default RotasPrivadas;