import React, { createContext, useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AddressContextProvider } from './context/AddressContext';
import { ShoppingCartContextProvider } from './context/ShoppingCartContext';
import { CoffeeItemType } from './data/Menu/MenuItems';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

export interface ShoppingCartItemType extends CoffeeItemType {
  quantity: number;
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

export const ConfirmedOrderDataContext = createContext({} as ConfirmedOrderDataContextType)

function App() {
  const [confirmedOrderData, setConfirmedOrderData] = useState<ConfirmedOrderDataType>({} as ConfirmedOrderDataType)

  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartContextProvider>
        <AddressContextProvider>
          <ConfirmedOrderDataContext.Provider value={{ confirmedOrderData, setConfirmedOrderData }}>
            <HashRouter>
              <GlobalStyle />
              <Router />
            </HashRouter>
          </ConfirmedOrderDataContext.Provider>
        </AddressContextProvider>
      </ShoppingCartContextProvider>
    </ThemeProvider>
  )
}

export default App