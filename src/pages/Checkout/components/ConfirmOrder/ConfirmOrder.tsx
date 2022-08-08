import { CartItemDisplay } from "../../../../components/CartItemDisplay/CartItemDisplay";
import { ConfirmOrderButton, ConfirmOrderContainer, ConfirmOrderWrapper, OrderViewer } from "./styles";
import { MenuItems } from "../../../../data/Menu/MenuItems";
import { ShoppingCartContext } from "../../../../App";
import { useContext } from "react";
import { OrderTotalPrice } from "../../../../components/OrderTotalPrice/OrderTotalPrice";

interface ConfirmOrderProps {
  isCepInvalid: boolean;
}

export function ConfirmOrder(props: ConfirmOrderProps) {
  const { shoppingCart, orderTotalPrice, numberOfItemsInCart } = useContext(ShoppingCartContext)

  const isCartEmpty: boolean = numberOfItemsInCart === 0

  return (
    <ConfirmOrderContainer>
      <h1
        className="checkout-title"
      >
        Confirme seu pedido
      </h1>
      <ConfirmOrderWrapper>
        <OrderViewer>
          {!isCartEmpty ?
            shoppingCart.map((item, index) => {
              if (item.quantity > 0) {
                return (
                  <div className="key__holder" key={index}>
                    <CartItemDisplay
                      productsData={MenuItems}
                      productId={item.id}
                      shoppingCartItem={item}
                      amountOfProducts={item.quantity}
                    />
                    <hr />
                  </div>
                )
              }
            }) : (
              <h1 
                className="empty__cart-message"
              >
                Carrinho vazio 😢
              </h1>
            )}
        </OrderViewer>
        <OrderTotalPrice 
          itemsTotal={orderTotalPrice} 
          deliveryPrice={3.50} 
          curencySymbol={"R$"} 
        />
        <ConfirmOrderButton
          type="submit"
          disabled={props.isCepInvalid || numberOfItemsInCart === 0}
        >
          CONFIRMAR PEDIDO
        </ConfirmOrderButton>
      </ConfirmOrderWrapper>
    </ConfirmOrderContainer>
  )
}