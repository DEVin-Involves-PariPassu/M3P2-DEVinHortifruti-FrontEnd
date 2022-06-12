import {render, screen} from '@testing-library/react'
import TableSale from './index.js'
import { MemoryRouter } from 'react-router-dom'

it ('should have a "CLIENTE" columns', () => {
    render(
    <MemoryRouter><TableSale /></MemoryRouter> );
    const columns = screen.getByText('CLIENTE');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "CPF" columns', () => {
    render(
    <MemoryRouter><TableSale /></MemoryRouter> );
    const columns = screen.getByText('CPF');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "VALOR" columns', () => {
    render(
    <MemoryRouter><TableSale /></MemoryRouter> );
    const columns = screen.getByText('VALOR');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "AÇÕES" columns', () => {
    render(
    <MemoryRouter><TableSale /></MemoryRouter> );
    const columns = screen.getByText('AÇÕES');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "STATUS" columns', () => {
    render(
    <MemoryRouter><TableSale /></MemoryRouter> );
    const columns = screen.getByText('STATUS');
    expect(columns).toBeInTheDocument();
    
  });

  export{};