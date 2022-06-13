import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UsuarioForm from 'components/UsuarioForm';

describe('UsuarioForm', ()=> {
    test('deve conter campo de texto para digitar nome do usuário', () => {
        render(<UsuarioForm/>);

        const fieldNome = screen.getByPlaceholderText(/Nome/i)
        expect(fieldNome).toBeInTheDocument();
    });

    test('deve conter campo de texto para digitar email do usuário', () => {
        render(<UsuarioForm/>);

        const fieldEmail = screen.getByPlaceholderText(/devin@hortifruti.com/i)
        expect(fieldEmail).toBeInTheDocument();   
    });

});