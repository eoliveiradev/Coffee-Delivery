import { ProductDisplay } from "../ProductDisplay/ProductDisplay";
import { CoffeesMenuContainer } from "./styles";
import { coffeItemType, MenuItems } from "../../data/Menu/MenuItems";

export function CoffesMenu(){
  
  return(
    <CoffeesMenuContainer>
      {MenuItems.map(item =>(
        <ProductDisplay product={item}/>
      ))}
      

    </CoffeesMenuContainer>
  )
}