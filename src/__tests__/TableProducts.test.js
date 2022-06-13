import {render, screen} from '@testing-library/react'
import TableProducts from 'components/TableProducts';
import { MemoryRouter } from 'react-router-dom'
import { RecoilRoot } from "recoil";

it ('should have a "ID" columns', () => {
    render(
    <MemoryRouter>
      <RecoilRoot>
        <TableProducts />
      </RecoilRoot>
    </MemoryRouter>
         );
    const columns = screen.getByText('ID');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "PRODUTO" columns', () => {
    render(
      <MemoryRouter>
      <RecoilRoot>
        <TableProducts />
      </RecoilRoot>
    </MemoryRouter> );
    const columns = screen.getByText('PRODUTO');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "VALOR" columns', () => {
    render(
      <MemoryRouter>
      <RecoilRoot>
        <TableProducts />
      </RecoilRoot>
    </MemoryRouter> );
    const columns = screen.getByText('VALOR');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "AÇÕES" columns', () => {
    render(
      <MemoryRouter>
      <RecoilRoot>
        <TableProducts />
      </RecoilRoot>
    </MemoryRouter> );
    const columns = screen.getByText('AÇÕES');
    expect(columns).toBeInTheDocument();
    
  });
  it ('should have a "STATUS" columns', () => {
    render(
      <MemoryRouter>
      <RecoilRoot>
        <TableProducts />
      </RecoilRoot>
    </MemoryRouter> );
    const columns = screen.getByText('STATUS');
    expect(columns).toBeInTheDocument();
    
  });


  export{};