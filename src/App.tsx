import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CoffeeItemType } from './data/Menu/MenuItems';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

export interface ShoppingCartItemType extends CoffeeItemType {
  quantity: number;
}

interface ShoppingCartContextType {
  shoppingCart: ShoppingCartItemType[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCartItemType[]>>;
  numberOfItemsInCart: number;
  orderTotalPrice: number;
}

interface AddressType {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface ConfirmedOrderDataType {
  products: ShoppingCartItemType[]
  address: AddressType;
}

interface OrderDataContextType{
  confirmedOrderData: ConfirmedOrderDataType;
  setConfirmedOrderData: React.Dispatch<React.SetStateAction<ConfirmedOrderDataType>>;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)
export const OrderDataContext = createContext({} as OrderDataContextType)

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItemType[]>([])
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0)
  const [orderTotalPrice, setOrderTotalPrice] = useState(0)
  const [confirmedOrderData, setConfirmedOrderData] = useState<ConfirmedOrderDataType>({} as ConfirmedOrderDataType)

  let totalItemsInCart: number = shoppingCart.reduce((previousValue, item, index) => (previousValue + item.quantity), 0)
  let totalPriceOfCart: number = shoppingCart.reduce((previousValue, item, index) => (previousValue + item.price * item.quantity), 0)
  useEffect(() => {
    setNumberOfItemsInCart(totalItemsInCart)
    setOrderTotalPrice(totalPriceOfCart)
  }, [shoppingCart])

  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartContext.Provider
        value={{
          shoppingCart: shoppingCart,
          setShoppingCart: setShoppingCart,
          numberOfItemsInCart: numberOfItemsInCart,
          orderTotalPrice: orderTotalPrice
        }}
      >
        <OrderDataContext.Provider value={{confirmedOrderData, setConfirmedOrderData}}>
          <BrowserRouter>
            <GlobalStyle />
            <Router />
          </BrowserRouter>
        </OrderDataContext.Provider>
      </ShoppingCartContext.Provider>
    </ThemeProvider>
  )
}

export default App
