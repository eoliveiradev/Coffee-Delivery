import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { getLS, setLS } from "../utilities/localStorage";

interface ShoppingCartContextProps {
  children: ReactNode
}

export type extrasType = "Gelado" | "Com Leite" | "Alcoólico" | ""

export interface ShoppingCartItemType {
  id: number;
  name: string;
  description: string;
  image: any;
  type: "Tradicional" | "Especial";
  extras?: extrasType[];
  currencySymbol: "R$" | "€" | "US$";
  price: number;
  quantity: number;
}

export const shoppingCartLS = getLS('shoppingCart');

interface ShoppingCartContextType {
  shoppingCart: ShoppingCartItemType[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCartItemType[]>>;
  numberOfItemsInCart: number;
  orderTotalPrice: number;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProps) {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItemType[]>([])
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0)
  const [orderTotalPrice, setOrderTotalPrice] = useState(0)
  const wasLSDataLoaded = useRef(false)

  function handleCartLS() {
    if (shoppingCartLS === null) {
      setLS('shoppingCart', shoppingCart)
    } else if (!wasLSDataLoaded.current) {
      setShoppingCart(shoppingCartLS)
      wasLSDataLoaded.current = true
    } else {
      setLS('shoppingCart', shoppingCart)
    }
  }

  let totalItemsInCart: number = shoppingCart
    .reduce(
      (previousValue, item) => (
        previousValue + item.quantity
      ), 0)

  let totalPriceOfCart: number = shoppingCart
    .reduce(
      (previousValue, item) => (
        previousValue + item.price * item.quantity
      ), 0)

  useEffect(() => {
    if (!isNaN(totalItemsInCart) && !isNaN(totalPriceOfCart)) {
      setNumberOfItemsInCart(totalItemsInCart)
      setOrderTotalPrice(totalPriceOfCart)
    } else {
      setNumberOfItemsInCart(0)
      setOrderTotalPrice(0)
    }

    !(shoppingCart.length === 0 && wasLSDataLoaded.current) && handleCartLS();
  }, [shoppingCart])

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        numberOfItemsInCart,
        orderTotalPrice
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}