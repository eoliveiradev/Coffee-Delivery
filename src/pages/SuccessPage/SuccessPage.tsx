import { NoConfirmedOrder, DeliveryInfo, OrderInfo, SuccessPageContainer } from "./styles";
import SuccessPageImage from "../../assets/images/SuccessPageImage.png";
import { useContext } from "react";
import { ConfirmedOrderDataContext } from "../../App";
import { ArrowLeft, CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Link } from "react-router-dom";

export function SuccessPage() {
  const { confirmedOrderData } = useContext(ConfirmedOrderDataContext)

  return (
    <SuccessPageContainer>
      {confirmedOrderData.products ?
        (<>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <DeliveryInfo>
            <div className="linear-gradient-border">
              <div className="deliveryInfo-container">
                <OrderInfo>
                  <div className="icon-wrapper purple">
                    <MapPin size={16} color="#fafafa" />
                  </div>
                  <div className="info-wrapper">
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
                  <div className="icon-wrapper yellow">
                    <Timer size={16} color="#fafafa" weight="fill" />
                  </div>
                  <div className="info-wrapper">
                    <h1>Previsão de entrega</h1>
                    <strong>20 min - 30 min </strong>
                  </div>
                </OrderInfo>
                <OrderInfo>
                  <div className="icon-wrapper yellow-dark">
                    <CurrencyDollar size={16} color="#fafafa" weight="fill" />
                  </div>
                  <div className="info-wrapper">
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
        </>) :

        (<>
          <NoConfirmedOrder>
            <h1>Você não tem nenhum pedido em andamento.</h1>
            <Link 
              to={"/"} 
              id="back-to-home-btn"
            >
              <ArrowLeft id="arrow-icon"size={18} weight="fill" />
              Voltar à home
            </Link> 
            
          </NoConfirmedOrder>
        </>)
      }
    </SuccessPageContainer>
  )
}