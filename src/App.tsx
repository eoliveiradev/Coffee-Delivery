import React, { createContext, useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CoffeeItemType } from './data/Menu/MenuItems';
import { CepDataType } from './pages/Checkout/components/CompleteOrder/CompleteOrder';
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
export const shoppingCartDB = getDB('shoppingCart');

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

interface locationDataType{
  isLocationValid: boolean;
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  defaultValue?: string;
}

interface LocationContextType {
  locationData: locationDataType;
  setLocationData: React.Dispatch<React.SetStateAction<locationDataType>>;
}

export const LocationContext = createContext({} as LocationContextType)
export const ShoppingCartContext = createContext({} as ShoppingCartContextType)
export const ConfirmedOrderDataContext = createContext({} as ConfirmedOrderDataContextType)

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItemType[]>([])
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0)
  const [orderTotalPrice, setOrderTotalPrice] = useState(0)
  const [confirmedOrderData, setConfirmedOrderData] = useState<ConfirmedOrderDataType>({} as ConfirmedOrderDataType)
  const defaultLocationData: locationDataType = {
    isLocationValid: false,
    cep: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    defaultValue: "Localização",
    
  }
  const [locationData, setLocationData] = useState<locationDataType>(defaultLocationData)

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

  function handleAddCartToCache() {
    if (shoppingCartDB.length === 0) {
      setDB('shoppingCart', shoppingCart)
    } else if (shoppingCart.length === 0 && shoppingCartDB.length > 0) {
      setShoppingCart(shoppingCartDB)
    } else if (shoppingCart.length > 0) {
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

    !(confirmedOrderData.products && shoppingCart.length === 0) && handleAddCartToCache();
  }, [shoppingCart])

  function handleAddLocationToCache(){
    const locationDB = getDB("location")
    
    if(locationDB === null){
      setDB("location", locationData)
    } else if(locationData === defaultLocationData && locationDB.cep){
      setLocationData(locationDB)
    } else if (locationData != defaultLocationData){
      setDB("location", locationData)
    }
  }

  useEffect(() => {
    handleAddLocationToCache();
  }, [locationData])

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
        <LocationContext.Provider value={{ locationData, setLocationData }}>
          <ConfirmedOrderDataContext.Provider value={{ confirmedOrderData, setConfirmedOrderData }}>
            <HashRouter>
              <GlobalStyle />
              <Router />
            </HashRouter>
          </ConfirmedOrderDataContext.Provider>
        </LocationContext.Provider>
      </ShoppingCartContext.Provider>
    </ThemeProvider>
  )
}

export default App