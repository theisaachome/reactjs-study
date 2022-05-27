import React from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
    const addItemToCartHandler = (item)=>{}
    const removeItemFromCartHandler = (id)=>{}

    const ctxContext = {
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
    }
  return (
    <CartContext.Provider value={ctxContext}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider