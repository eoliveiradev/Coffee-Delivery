import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

interface ShoppingCartItem{
  id: number;
  quantity: number;
  price: number;
}

interface ShoppingCartContextType {
  shoppingCart: ShoppingCartItem[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCartItem[]>>;
  numberOfItemsInCart: number;
  orderTotalPrice: number;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([])
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
