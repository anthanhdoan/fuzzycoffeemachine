import React, {createContext, useState} from "react";
import {IProduct} from "../Components/ProductCard";

export interface ICartItems {
  productId: number;
  amount: number;
}

const initialCartItemsState: Array<ICartItems> = [
  {productId: 1, amount: 0},
  {productId: 2, amount: 0},
  {productId: 3, amount: 0}
]

export const CartContext = createContext<ICartItems[] | any>([])

export const CartProvider = ({children}: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICartItems[]>(initialCartItemsState);

  // increment function
  const incrementCartItem = (product: IProduct) => {
    setCartItems((prevCartItems: Array<ICartItems>) => {
      return prevCartItems.map((obj: ICartItems) => {
        if (obj.productId === product.id) {
          return {...obj, amount: (() => obj.amount + 1)()}
        } else {
          return obj
        }
      })
    })
  }

  // decrement function --> SAME BUT ADD IN LOGIC FOR DECREMENT IF AMOUNT < 1
  const decrementCartItem = (product: IProduct) => {
    setCartItems((prevCartItems: Array<ICartItems>) => {
      return prevCartItems.map((obj: ICartItems) => {
        if (obj.productId === product.id && obj.amount >= 1) {
          return {...obj, amount: (() => obj.amount - 1)()}
        } else {
          return obj
        }
      })
    })
  }

  return (<CartContext.Provider
      value={[cartItems, setCartItems, incrementCartItem, decrementCartItem]}>{children}</CartContext.Provider>)
}