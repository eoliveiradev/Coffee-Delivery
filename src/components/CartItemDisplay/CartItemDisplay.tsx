import { CartItemDisplayContainer, CartItemWrapper } from "./styles";
import { MenuItems } from "../../data/Menu/MenuItems"

interface CartItemDisplayProps{
  ProductsData: {};
  productId: number;
  amountOfProducts: number;
}


export function CartItemDisplay(){
  return(
    <CartItemDisplayContainer>
      <CartItemWrapper>
        <img src={MenuItems[0].image}/>
        <EditCartItem>
          
        </EditCartItem>
      </CartItemWrapper>
      
    </CartItemDisplayContainer>
  )
}