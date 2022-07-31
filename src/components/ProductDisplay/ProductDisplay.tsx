import { coffeItemType } from "../../data/Menu/MenuItems";
import { AddToCartSection, BuyWrapper, AddToCartButton, ProductDisplayContainer, ProductInfo, ProductTags } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import React, { createContext, useState } from "react";
import { Counter } from "../Counter/Counter";

type productType = coffeItemType
interface productDisplayProps{
  product: productType;
}

interface amountOfProductsContextType{
  amountOfProducts: number;
  setAmountOfProducts: React.Dispatch<React.SetStateAction<number>>;
}

export const amountOfProductsContext = createContext({} as amountOfProductsContextType)

export function ProductDisplay(props : productDisplayProps) {

  const [amountOfProducts, setAmountOfProducts] = useState(0)

  return (
    <amountOfProductsContext.Provider value={{amountOfProducts, setAmountOfProducts}}>
      <ProductDisplayContainer>
        <img src={props.product.image} />
        <ProductTags>
          <li>{props.product.type}</li>
          {props.product.extras &&
            props.product.extras.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ProductTags>
        <ProductInfo>
          <h1>{props.product.name}</h1>
          <p>{props.product.description}</p>
        </ProductInfo>

        <BuyWrapper>
          <div className="price__wrapper">
            {props.product.currencySymbol}
            <strong>
              {props.product.price.toFixed(2)}
            </strong>
          </div>

          <AddToCartSection>
            <Counter />
            <AddToCartButton>
              <ShoppingCart
                size={22}
                weight="fill"
                color={defaultTheme["base-colors"]["white"]}
              />
            </AddToCartButton>
          </AddToCartSection>
          
        </BuyWrapper>
      </ProductDisplayContainer>
    </amountOfProductsContext.Provider>
  )
}