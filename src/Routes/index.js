import React from "react";
import { useSelector } from 'react-redux';
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";
import { signed } from "store/modules/auth/recoil";
import { useRecoilValue } from "recoil";

function Routes() {
    //pegar usuário da store do Redux
    //com esta variável, deverá ser possível verificar se o usuário está logado ou não
    //const usuario = useSelector(state => state.usuario);

    //por enquanto, usuario é só uma flag setada manualmente, conforme descrito abaixo.
    //Se quiser ver a tela de login, sete usuario = false
    //Senão, mantenha usuario = true
    const logado = useRecoilValue(signed);

    return (
        <>
        {
            //verifica se o usuário está preenchido (supondo que o usuário é nulo quando não há autenticação)
        }
            {logado ? <RotasPrivadas/> : <RotasPublicas/>}
        </>        
    )
}

export default Routes;
