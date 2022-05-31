export const addProductToCart = (product) => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product
    }
  }
}

export const removeProductToCart = (id) => {
  return {
    type: 'REMOVE_PRODUCT_TO_CART',
    payload: {
      id
    }
  }
}

export const decrementAmountProductToCart = (id) => {
  return {
    type: 'DECREMENT_AMOUNT_PRODUCT_TO_CART',
    payload: {
      id
    }
  }
}

export const incrementAmountProductToCart = (id) => {
  return {
    type: 'INCREMENT_AMOUNT_PRODUCT_TO_CART',
    payload: {
      id
    }
  }
}