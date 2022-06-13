import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { MemoryRouter } from "react-router-dom";
import UsuarioForm from '.';

describe("UsuarioForm", () => {
  test("deve conter campo de texto para digitar nome do usuário", () => {
    render(<UsuarioForm />);

    const fieldNome = screen.getByPlaceholderText(/Nome/i);
    expect(fieldNome).toBeInTheDocument();
  });

  test("deve conter campo de texto para digitar email do usuário", () => {
    render(<UsuarioForm />);

    const fieldEmail = screen.getByPlaceholderText(/devin@hortifruti.com/i);
    expect(fieldEmail).toBeInTheDocument();
  });

  test("deve conter campo de texto para digitar login do usuario", () => {
    render(<UsuarioForm />);

    const fieldLogin = screen.getByPlaceholderText(/Login do Usuario/i);
    expect(fieldLogin).toBeInTheDocument();
  });
});

it('should have a "Nome Completo" column', () => {
  render(
    <MemoryRouter>
      <RecoilRoot>
        <UsuarioForm />
      </RecoilRoot>
    </MemoryRouter>
  );
  const columns = screen.getByText(/Nome Completo/i);
  expect(columns).toBeInTheDocument();
});
it('should have a "E-mail" column', () => {
  render(
    <MemoryRouter>
      <RecoilRoot>
        <UsuarioForm />
      </RecoilRoot>
    </MemoryRouter>
  );
  const columns = screen.getByText(/E-mail/i);
  expect(columns).toBeInTheDocument();
});
it('should have a "Data de Nascimento" column', () => {
  render(
    <MemoryRouter>
      <RecoilRoot>
        <UsuarioForm />
      </RecoilRoot>
    </MemoryRouter>
  );
  const columns = screen.getByText(/Data de Nascimento/i);
  expect(columns).toBeInTheDocument();
});
it('should have a "Login" column', () => {
  render(
    <MemoryRouter>
      <RecoilRoot>
        <UsuarioForm />
      </RecoilRoot>
    </MemoryRouter>
  );
  const columns = screen.getByText(/Login/i);
  expect(columns).toBeInTheDocument();
});

export {};
