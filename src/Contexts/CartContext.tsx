import React, {createContext, useState} from "react";
import {IProduct} from "../Components/ProductCard";

export interface ICartItems {
  productId: number;
  amount: number;
}

const initialCartItemsState: Array<ICartItems> = []

export const CartContext = createContext<ICartItems[] | any>([])

export const CartProvider = ({children}: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICartItems[]>(initialCartItemsState);

  const getItemInCart = (productId: number): ICartItems | undefined => {
    return cartItems.find((item) => item.productId === productId)
  }

  const addCartItem = (product: IProduct, amt: number) => {
    setCartItems([...cartItems, {productId: product.id, amount: 1}])
  }

  type Options = "increment" | "decrement";
  const updateCart = (product: IProduct, action: Options) => {
    const item = getItemInCart(product.id)
    if (!item) {
      addCartItem(product, 1)
      return
    }
    if (action === "increment") incrementCartItem(product)
    if (action === "decrement" && item.amount === 1) {
      removeFromCart(product.id)
      return
    }
    if (action === "decrement") decrementCartItem(product)
  }

  const removeFromCart = (productId: number) => {
    const items = cartItems.filter((item) => item.productId !== productId)
    setCartItems(items)
  }

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
      value={[cartItems, setCartItems, updateCart, addCartItem]}>{children}</CartContext.Provider>)
}