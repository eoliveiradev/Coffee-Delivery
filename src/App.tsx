import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AddressContextProvider } from './context/AddressContext';
import { ConfirmedOrderContextProvider } from './context/ConfirmedOrderContext';
import { ShoppingCartContextProvider } from './context/ShoppingCartContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartContextProvider>
        <AddressContextProvider>
          <ConfirmedOrderContextProvider>
            <HashRouter>
              <GlobalStyle />
              <Router />
            </HashRouter>
          </ConfirmedOrderContextProvider>
        </AddressContextProvider>
      </ShoppingCartContextProvider>
    </ThemeProvider>
  )
}

export default App