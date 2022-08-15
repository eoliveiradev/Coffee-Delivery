import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout/Checkout";
import { Home } from "./pages/Home/Home";
import { SuccessPage } from "./pages/SuccessPage/SuccessPage";

export function Router(){
  return(
    <Routes>
      <Route path="/Coffee-Delivery" element={<DefaultLayout />}>
        <Route path="/Coffee-Delivery/" element={<Home />} />
        <Route path="/Coffee-Delivery/checkout" element={<Checkout />} />
        <Route path="/Coffee-Delivery/pedido-confirmado" element={<SuccessPage/>} />
      </Route>
    </Routes>
  )
}