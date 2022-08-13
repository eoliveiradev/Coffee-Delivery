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

export const getDB = (DB: string) => JSON.parse(localStorage.getItem(DB) as string) ?? [];
export const setDB = (DBName: string, newDB: any) => localStorage.setItem(DBName, JSON.stringify(newDB));
export const banco = getDB('shoppingCart');

interface AddressType {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export type paymentMethodType = "creditCard" | "debitCard" | "cash"

export interface ConfirmedOrderDataType {
  products: ShoppingCartItemType[]
  address: AddressType;
  paymentMethod: paymentMethodType;
}

interface ConfirmedOrderDataContextType {
  confirmedOrderData: ConfirmedOrderDataType;
  setConfirmedOrderData: React.Dispatch<React.SetStateAction<ConfirmedOrderDataType>>;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)
export const ConfirmedOrderDataContext = createContext({} as ConfirmedOrderDataContextType)

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItemType[]>([])
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0)
  const [orderTotalPrice, setOrderTotalPrice] = useState(0)
  const [confirmedOrderData, setConfirmedOrderData] = useState<ConfirmedOrderDataType>({} as ConfirmedOrderDataType)

  let totalItemsInCart: number = shoppingCart.reduce((previousValue, item, index) => (previousValue + item.quantity), 0)
  let totalPriceOfCart: number = shoppingCart.reduce((previousValue, item, index) => (previousValue + item.price * item.quantity), 0)

  function handleAddCartToCache() {
    if(banco.length === 0){
      setDB('shoppingCart', shoppingCart)
    }else if(shoppingCart.length === 0 && banco.length > 0){
      setShoppingCart(banco)
    }else if (shoppingCart.length > 0){
      setDB('shoppingCart', shoppingCart)
    }
  }

  useEffect(() => {
    if (!isNaN(totalItemsInCart) && !isNaN(totalPriceOfCart)) {
      setNumberOfItemsInCart(totalItemsInCart)
      setOrderTotalPrice(totalPriceOfCart)
    } else {
      setNumberOfItemsInCart(0)
      setOrderTotalPrice(0)
    }
    
    !confirmedOrderData.products && handleAddCartToCache();
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
        <ConfirmedOrderDataContext.Provider value={{ confirmedOrderData, setConfirmedOrderData }}>
          <BrowserRouter>
            <GlobalStyle />
            <Router />
          </BrowserRouter>
        </ConfirmedOrderDataContext.Provider>
      </ShoppingCartContext.Provider>
    </ThemeProvider>
  )
}

export default App