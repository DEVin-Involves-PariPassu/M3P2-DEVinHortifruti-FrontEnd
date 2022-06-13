import { render, screen } from "@testing-library/react";
import TableProducts from ".";
import { MemoryRouter } from "react-router-dom";

it('should have a "ID" column', () => {
  render(
    <MemoryRouter>
      <TableProducts />
    </MemoryRouter>
  );
  const columns = screen.getByText("id");
  expect(columns).toBeInTheDocument();
});
it('should have a "Nome" column', () => {
  render(
    <MemoryRouter>
      <TableProducts />
    </MemoryRouter>
  );
  const columns = screen.getByText("Nome");
  expect(columns).toBeInTheDocument();
});
it('should have a "E-mail" column', () => {
  render(
    <MemoryRouter>
      <TableProducts />
    </MemoryRouter>
  );
  const columns = screen.getByText("E-mail");
  expect(columns).toBeInTheDocument();
});
it('should have a "Data de Nascimento" column', () => {
  render(
    <MemoryRouter>
      <TableProducts />
    </MemoryRouter>
  );
  const columns = screen.getByText("Data de Nascimento");
  expect(columns).toBeInTheDocument();
});
it('should have a "Admin" column', () => {
  render(
    <MemoryRouter>
      <TableProducts />
    </MemoryRouter>
  );
  const columns = screen.getByText("Admin");
  expect(columns).toBeInTheDocument();
});
it('should have a "Ações" column', () => {
  render(
    <MemoryRouter>
      <TableProducts />
    </MemoryRouter>
  );
  const columns = screen.getByText("Ações");
  expect(columns).toBeInTheDocument();
});

export {};
