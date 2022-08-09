import { DeliveryInfo, SuccessPageContainer } from "./styles";
import SuccessPageImage from "../../assets/images/SuccessPageImage.png";

export function SuccessPage(){
  return(
    <SuccessPageContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <DeliveryInfo>
        <div className="deliveryInfo__container">
            <div className="linear-gradient-border"/>
            
        </div>
        <img src={SuccessPageImage} />
      </DeliveryInfo>
    </SuccessPageContainer>
  )
}