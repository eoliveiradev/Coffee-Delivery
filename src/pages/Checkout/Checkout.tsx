import { CompleteOrder } from "./components/CompleteOrder/CompleteOrder";
import { ConfirmOrder } from "./components/ConfirmOrder/ConfirmOrder";
import {
  CheckoutContainer,
} from "./styled";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="wrapper">
        <CompleteOrder />
        <ConfirmOrder />
      </div>
    </ CheckoutContainer>
  )
}