import {render, screen} from '@testing-library/react'
import TableProducts from '.';
import { MemoryRouter } from 'react-router-dom'

it ('should have a "ID" columns', () => {
    render(
    <MemoryRouter><TableProducts /></MemoryRouter> );
    const columns = screen.getByText('ID');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "PRODUTO" columns', () => {
    render(
    <MemoryRouter><TableProducts /></MemoryRouter> );
    const columns = screen.getByText('PRODUTO');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "VALOR" columns', () => {
    render(
    <MemoryRouter><TableProducts /></MemoryRouter> );
    const columns = screen.getByText('VALOR');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "AÇÕES" columns', () => {
    render(
    <MemoryRouter><TableProducts /></MemoryRouter> );
    const columns = screen.getByText('AÇÕES');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "STATUS" columns', () => {
    render(
    <MemoryRouter><TableProducts /></MemoryRouter> );
    const columns = screen.getByText('STATUS');
    expect(columns).toBeInTheDocument();
    
  });


  export{};