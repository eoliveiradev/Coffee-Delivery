import { CartItemDisplay } from "../../../../components/CartItemDisplay/CartItemDisplay";
import { ConfirmOrderContainer, ConfirmOrderWrapper } from "./styles";


export function ConfirmOrder() {
  return (
    <ConfirmOrderContainer>
      <h1
        className="checkout-title"
      >
        Confirme seu pedido
      </h1>
      <ConfirmOrderWrapper>
        <button type="submit">Submit debug</button>
        <CartItemDisplay />
      </ConfirmOrderWrapper>
    </ConfirmOrderContainer>
  )
}