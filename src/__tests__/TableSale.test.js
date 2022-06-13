import {render, screen} from '@testing-library/react'
import TableSale from 'components/TableSale';
import { MemoryRouter } from 'react-router-dom'
import { RecoilRoot } from "recoil";

it ('should have a "CLIENTE" columns', () => {
    render(
      <MemoryRouter>
      <RecoilRoot>
        <TableSale />
        </RecoilRoot>
      </MemoryRouter> );
    const columns = screen.getByText('CLIENTE');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "CPF" columns', () => {
    render(
      
    <MemoryRouter>
      <RecoilRoot>
        <TableSale />
        </RecoilRoot>
      </MemoryRouter> );
    const columns = screen.getByText('CPF');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "VALOR" columns', () => {
    render(
      <MemoryRouter>
      <RecoilRoot>
        <TableSale />
        </RecoilRoot>
      </MemoryRouter> );
    const columns = screen.getByText('VALOR');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "AÇÕES" columns', () => {
    render(
      <MemoryRouter>
      <RecoilRoot>
        <TableSale />
        </RecoilRoot>
      </MemoryRouter> );
    const columns = screen.getByText('AÇÕES');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "STATUS" columns', () => {
    render(
      <MemoryRouter>
      <RecoilRoot>
        <TableSale />
        </RecoilRoot>
      </MemoryRouter> );
    const columns = screen.getByText('STATUS');
    expect(columns).toBeInTheDocument();
    
  });

  export{};