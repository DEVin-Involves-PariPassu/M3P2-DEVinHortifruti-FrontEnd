import { priceFormat } from "utils/priceFormat"

const INITIAL_STATE = {
  items: [
  ]
}

const carrinho = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    // * Adiciona um novo livro ao carrinho
    case 'ADD_PRODUCT_TO_CART': {

      const { product } = action.payload

      const productExists = state.items.find(item => item.id === product.id)

      if (!productExists) {
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...product,
              amount: 1,
              priceFormatted: priceFormat(1 * product.price)
            }
          ]
        }
      } else {
        const newItems = state.items.map(item => {
          if (item.id === productExists.id) {
            return {
              ...item,
              amount: item.amount + 1
            }
          }
          return item
        })

        return {
          ...state,
          items: newItems
        }
      }
    }

    case 'REMOVE_PRODUCT_TO_CART': {
      const itemsFiltered = state.items.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        items: itemsFiltered
      }
    }

    case 'DECREMENT_AMOUNT_PRODUCT_TO_CART': {
      const newItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          const amount = item.amount - 1
          return {
            ...item,
            amount,
            priceFormatted: priceFormat(amount * item.price)
          }
        }
        return item
      })

      return {
        ...state,
        items: newItems
      }
    }

    case 'INCREMENT_AMOUNT_PRODUCT_TO_CART': {
      const newItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          const amount = item.amount + 1
          return {
            ...item,
            amount,
            priceFormatted: priceFormat(amount * item.price)
          }
        }
        return item
      })

      return {
        ...state,
        items: newItems
      }
    }

    default:
      return state
  }
}

export default carrinho;