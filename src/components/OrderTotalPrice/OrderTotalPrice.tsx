import { OrderTotalPriceContainer } from "./styles";

interface OrderTotalPriceProps {
  itemsTotal: number;
  deliveryPrice: number;
  curencySymbol: "R$" | "$" | "£";
}

export function OrderTotalPrice(props: OrderTotalPriceProps) {
  return (
    <OrderTotalPriceContainer>
      <div className="items__total">
        Total de itens
        <span>
          {props.curencySymbol} {(props.itemsTotal).toFixed(2)}
        </span>
      </div>
      <div className="delivery__price">
        Entrega
        <span>
          {props.curencySymbol} {(props.deliveryPrice).toFixed(2)}
        </span>
      </div>
      <div className="total__price">
        <strong>
          Total
        </strong>
        <strong>
          {props.curencySymbol} {(props.deliveryPrice + props.itemsTotal).toFixed(2)}
        </strong>
      </div>
    </OrderTotalPriceContainer>
  )
}