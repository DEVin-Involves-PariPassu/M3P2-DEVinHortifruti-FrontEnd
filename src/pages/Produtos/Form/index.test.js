import { ProdutoForm }  from './index';
import { render , screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from "recoil";


describe('ProdutoForm', () => {
    
    it('Should a have PRODUCT URL', () => {
        render( <MemoryRouter>
                    <RecoilRoot>
                        <ProdutoForm/>
                    </RecoilRoot>
                </MemoryRouter>
               );
        const produtoURL = screen.getByLabelText("URL do produto");
        expect(produtoURL).toBeInTheDocument();

    });

    it('Should a have PRODUCT Name', () => {
        render(<MemoryRouter>
                    <RecoilRoot>
                        <ProdutoForm/>
                    </RecoilRoot>
                </MemoryRouter>
               );
        const produtoNome = screen.getByLabelText('Nome');
        expect(produtoNome).toBeInTheDocument();
        
    });

    
    it('Should a have PRODUCT value', () => {
        render(<MemoryRouter>
                    <RecoilRoot>
                         <ProdutoForm/>
                     </RecoilRoot>
                  </MemoryRouter>
              );
        const produtoCaixa = screen.getBylabel("Preço da caixa");
        expect(produtoCaixa).toBeInTheDocument();
    });
    
    
    it('Should a have PRODUCT', () => {
        render(<MemoryRouter>
                            <RecoilRoot>
                                <ProdutoForm/>
                            </RecoilRoot>
                        </MemoryRouter>
        );
            const produtoDesc = screen.getBylabel("Descrição");
            expect(produtoDesc).toBeInTheDocument();
    });

    
    it('Should a have PRODUCT action', () => {
        render(<MemoryRouter>
                    <RecoilRoot>
                        <ProdutoForm/>
                    </RecoilRoot>
                </MemoryRouter>
        );
        const produtoativo = screen.getByLabelText("Produto Ativo?");
        expect(produtoativo).toBeInTheDocument();
    });

   
    it('Should a have Button Black', () => {
        render(<MemoryRouter>
                    <RecoilRoot>
                        <ProdutoForm/>
                    </RecoilRoot>
                </MemoryRouter>
         );
        const produtoVoltar = screen.getByLabelText('Voltar');
        expect(produtoVoltar).toBeInTheDocument();
        
    });

    it('Should a have Button Register', () => {
        render(<MemoryRouter>
                        <RecoilRoot>
                            <ProdutoForm/>
                        </RecoilRoot>
                    </MemoryRouter>
                );
        const produtoCad = screen.getByLabelText('Cadastrar');
        expect(produtoCad).toBeInTheDocument();
    });

});