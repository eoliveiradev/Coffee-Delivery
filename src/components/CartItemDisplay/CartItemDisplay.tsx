import { CartItemDisplayContainer, CartItemInfo, CartItemWrapper, EditCartItem, RemoveCartItem } from "./styles";
import { MenuItems } from "../../data/Menu/MenuItems"
import { useContext, useEffect, useRef, useState } from "react";
import { Counter } from "../Counter/Counter";
import { ShoppingCartContext } from "../../App";

interface CartItemDisplayProps {
  ProductsData: any[];
  productId: number;
  amountOfProducts: number;
}

export function CartItemDisplay(props: CartItemDisplayProps) {
  const [counter, setCounter] = useState(props.amountOfProducts)
  const { shoppingCart, setShoppingCart, numberOfItemsInCart} = useContext(ShoppingCartContext)
  const [wasItemDeleted, setWasItemDeleted] = useState(false)

  let itemIndex = shoppingCart.findIndex(item => item.id === props.productId);
  let newShoppingCart = [...shoppingCart]

  useEffect(() => {
    handleCounterChange()
  }, [counter])

  function handleCounterChange(){
    newShoppingCart[itemIndex].quantity = counter
    setShoppingCart(newShoppingCart)
  }

  function handleRemoveCartItem() {
    newShoppingCart[itemIndex].quantity = 0;
    setShoppingCart(newShoppingCart)
    setCounter(0)
    setWasItemDeleted(true);
  }

  return (
    <>
      {!wasItemDeleted && (
        <CartItemDisplayContainer>
          <CartItemWrapper>
            <img src={MenuItems[props.productId].image} />
            <CartItemInfo>
              <h1>{MenuItems[props.productId].name}</h1>
              <EditCartItem>
                <Counter counter={counter} setCounter={setCounter}/>
                <RemoveCartItem
                  type="button"
                  onClick={() => handleRemoveCartItem()}
                >
                  Remover
                </RemoveCartItem>
              </EditCartItem>
            </CartItemInfo>
          </CartItemWrapper>
        </CartItemDisplayContainer>
      )}
    </>
  )
}