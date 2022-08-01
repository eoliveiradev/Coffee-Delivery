import { ProductDisplay } from "../ProductDisplay/ProductDisplay";
import { Coffees, CoffeesMenuContainer } from "./styles";
import { coffeItemType, MenuItems } from "../../data/Menu/MenuItems";

export function CoffesMenu(){
  return(
    <CoffeesMenuContainer>
      <h1 id="title">Nossos Cafés</h1>
      <Coffees>
        {MenuItems.map((item, index) =>(
          <ProductDisplay 
            key={index}
            product={item}
          />
        ))}
      </Coffees>
    </CoffeesMenuContainer>
  )
}