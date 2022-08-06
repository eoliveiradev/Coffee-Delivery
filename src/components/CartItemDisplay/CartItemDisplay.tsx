import { CartItemDisplayContainer, CartItemInfo, CartItemWrapper, EditCartItem, RemoveCartItem } from "./styles";
import { coffeItemType } from "../../data/Menu/MenuItems"
import { useContext, useEffect, useState } from "react";
import { Counter } from "../Counter/Counter";
import { ShoppingCartContext } from "../../App";
import { Trash } from "phosphor-react";

interface CartItemDisplayProps {
  productsData: coffeItemType[];
  productId: number;
  amountOfProducts: number;
}

export function CartItemDisplay(props: CartItemDisplayProps) {
  const [counter, setCounter] = useState(props.amountOfProducts)
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)

  let itemIndex = shoppingCart.findIndex(item => item.id === props.productId);
  let itemIndexInProductsData = props.productsData.findIndex(item => item.id === props.productId);
  let newShoppingCart = [...shoppingCart]

  useEffect(() => {
    handleCounterChange()
  }, [counter])

  function handleCounterChange() {
    newShoppingCart[itemIndex].quantity = counter
    setShoppingCart(newShoppingCart)
  }

  function handleRemoveCartItem() {
    newShoppingCart[itemIndex].quantity = 0;
    setShoppingCart(newShoppingCart)
    setCounter(0)
  }

  return (
    <CartItemDisplayContainer>
      <CartItemWrapper>
        <img src={props.productsData[itemIndexInProductsData].image} />
        <CartItemInfo>
          <h1>{props.productsData[itemIndexInProductsData].name}</h1>
          <EditCartItem>
            <span className="counter__wrapper">
              <Counter counter={counter} setCounter={setCounter} />
            </span>
            <RemoveCartItem
              type="button"
              onClick={() => handleRemoveCartItem()}
            >
              <Trash size={16} color="#8047F8" />
              Remover
            </RemoveCartItem>
          </EditCartItem>
        </CartItemInfo>
      </CartItemWrapper>
      <strong className="price__container">
        {props.productsData[itemIndexInProductsData].currencySymbol}
        {(props.productsData[itemIndexInProductsData].price * shoppingCart[itemIndex].quantity).toFixed(2)}
      </strong>
    </CartItemDisplayContainer>
  )
}