import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CoffeeItemType } from './data/Menu/MenuItems';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

export interface ShoppingCartItemType extends CoffeeItemType{
  quantity: number;
}

interface ShoppingCartContextType {
  shoppingCart: ShoppingCartItemType[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCartItemType[]>>;
  numberOfItemsInCart: number;
  orderTotalPrice: number;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItemType[]>([])
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0)
  const [orderTotalPrice, setOrderTotalPrice] = useState(0)

  let totalItemsInCart : number = shoppingCart.reduce((previousValue, item, index) => (previousValue + item.quantity), 0)
  let totalPriceOfCart : number = shoppingCart.reduce((previousValue, item, index) => (previousValue + item.price * item.quantity), 0) 
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
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </ShoppingCartContext.Provider>
    </ThemeProvider>
  )
}

export default App
