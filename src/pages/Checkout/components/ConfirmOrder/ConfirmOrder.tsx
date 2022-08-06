import { CartItemDisplay } from "../../../../components/CartItemDisplay/CartItemDisplay";
import { ConfirmOrderContainer, ConfirmOrderWrapper, OrderTotalPrice, OrderViewer } from "./styles";
import { MenuItems } from "../../../../data/Menu/MenuItems";
import { ShoppingCartContext } from "../../../../App";
import { useContext } from "react";

export function ConfirmOrder() {
  const { shoppingCart } = useContext(ShoppingCartContext)

  return (
    <ConfirmOrderContainer>
      <h1
        className="checkout-title"
      >
        Confirme seu pedido
      </h1>
      <ConfirmOrderWrapper>
        <OrderViewer>
          {shoppingCart.map((item, index) => {
            if (item.quantity > 0) {
              return (
                <div className="key__holder" key={index}>
                  <CartItemDisplay
                    productsData={MenuItems}
                    productId={item.id}
                    amountOfProducts={item.quantity}
                  />
                  <hr/>
                </div>
              )
            }
          })}
        </OrderViewer>
        <OrderTotalPrice>
          <div className="items__total">
            Total de itens
            <span>R$ 29,70</span>
          </div>
          <div className="delivery__price">
            Entrega
            <span>R$ 3.50</span>
          </div>
          <div className="total__price">
            <strong>
              Total
            </strong>
            <strong>
              R$ 33,20
            </strong>
          </div>
        </OrderTotalPrice>
      </ConfirmOrderWrapper>
    </ConfirmOrderContainer>
  )
}