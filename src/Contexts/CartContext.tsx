import React, {createContext} from 'react';

interface ICartContext {
  children: JSX.Element;
}

const CartContext = createContext("hi");

export const CartProvider: React.FC<ICartContext> = ({children}) => {
  return <CartContext.Provider value={"hi"}>{children}</CartContext.Provider>
}