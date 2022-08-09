import { DeliveryInfo, OrderInfo, SuccessPageContainer } from "./styles";
import SuccessPageImage from "../../assets/images/SuccessPageImage.png";
import { useContext } from "react";
import { OrderDataContext } from "../../App";

export function SuccessPage() {
  const { confirmedOrderData } = useContext(OrderDataContext)

  return (
    <SuccessPageContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <DeliveryInfo>
        <div className="linear-gradient-border">
          <div className="deliveryInfo__container">
            <OrderInfo>
              <div className="icon__wrapper">

              </div>
              <div className="info__wrapper">
                <p>
                  Entrega em
                  <strong>
                    {` 
                      ${confirmedOrderData.address.street},
                      ${confirmedOrderData.address.number}
                    `}
                  </strong>
                  <br />
                  {`
                    ${confirmedOrderData.address.neighborhood} 
                    ${confirmedOrderData.address.city},
                    ${confirmedOrderData.address.state} 
                  `}
                </p>
              </div>
            </OrderInfo>
            <OrderInfo>
              <div className="icon__wrapper">

              </div>
              <div className="info__wrapper">
                <h1>Previsão de entrega</h1>
                <strong>20 min - 30 min </strong>

              </div>
            </OrderInfo>
            <OrderInfo>
              <div className="icon__wrapper">

              </div>
              <div className="info__wrapper">
                <h1>Pagamento na entrega</h1>
                <strong>
                  {confirmedOrderData.paymentMethod == "cash" && ("Dinheiro")}
                  {confirmedOrderData.paymentMethod == "creditCard" && ("Cartão de Crédito")}
                  {confirmedOrderData.paymentMethod == "debitCard" && ("Cartão de Débito")}
                </strong>
              </div>
            </OrderInfo>

          </div>
        </div>

        <img src={SuccessPageImage} />
      </DeliveryInfo>
    </SuccessPageContainer>
  )
}