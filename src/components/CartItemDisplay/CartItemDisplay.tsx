import { CartItemDisplayContainer, CartItemInfo, CartItemWrapper, EditCartItem } from "./styles";
import { MenuItems } from "../../data/Menu/MenuItems"
import { useState } from "react";
import { Counter } from "../Counter/Counter";

interface CartItemDisplayProps{
  ProductsData: {};
  productId: number;
  amountOfProducts: number;
}

export function CartItemDisplay(){
  const [counter, setCounter] = useState(5)

  return(
    <CartItemDisplayContainer>
      <CartItemWrapper>
        <img src={MenuItems[0].image}/>
        <CartItemInfo>
          <h1>{MenuItems[0].name}</h1>
          <EditCartItem>
            <Counter counter={counter} setCounter={setCounter}/>
          </EditCartItem>
        </CartItemInfo>
      </CartItemWrapper>
      
    </CartItemDisplayContainer>
  )
}