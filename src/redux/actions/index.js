export const adicionarUsuarioInfo = (nome, cpf) => {
  return {
    type: 'ADD_USUARIO_INFO',
    payload: {
      nome,
      cpf
    }
  }
}

export const adicionarHortAoCarrinho = (produto, valor) => {
  return {
    type: 'ADD_HORTI_AO_CARRINHO',
    payload: {
      produto,
      valor
    }
  }
}

export const removeHortiDoCarrinho = (produto, valor) => {
  return {
    type: 'REMOVE_HORTI_DO_CARRINHO',
    payload: {
      produto,
      valor
    }
  }
}

