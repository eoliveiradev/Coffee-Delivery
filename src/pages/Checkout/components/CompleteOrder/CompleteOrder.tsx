import { CurrencyDollar, MapPinLine } from "phosphor-react";
import {
  AdressFormContainer,
  ChoosePaymentMethodContainer,
  CompletOrderContainer,
  FormSection
} from "./styles";

export function CompleteOrder() {
  return (
    <CompletOrderContainer>
      <h1
        className="checkout-title"
      >
        Complete seu pedido
      </h1>
      <FormSection>

        <AdressFormContainer>
            <header>
              <div className="icon-frame">
                <MapPinLine
                  size={24}
                  color="#C47F17"
                />
              </div>
              <div className="header__content">
                <h1>Endereço de Entrega</h1>
                <p> Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <form>

            </form>
        </AdressFormContainer>

        <ChoosePaymentMethodContainer>
            <header>
              <div className="icon-frame">
                <CurrencyDollar
                  size={24}
                  color="#8047F8"
                />
              </div>
              <div className="header__content">
                <h1>Pagamento</h1>
                <p> O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </header>
            <div className="paymentMethods-wrapper">

            </div>
        </ChoosePaymentMethodContainer>

      </FormSection>
    </CompletOrderContainer>
  )
}