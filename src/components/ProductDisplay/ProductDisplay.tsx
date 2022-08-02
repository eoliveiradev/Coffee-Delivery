import { coffeItemType } from "../../data/Menu/MenuItems";
import { AddToCartSection, BuyWrapper, AddToCartButton, ProductDisplayContainer, ProductInfo, ProductTags } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import React, { createContext, useContext, useState } from "react";
import { Counter } from "../Counter/Counter";
import { ShoppingCartContext } from "../../App";

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

  const { 
    shoppingCart, 
    setShoppingCart,
    numberOfItemsInCart, 
    setNumberOfitemsInCart
  } = useContext(ShoppingCartContext)

  function handleAddToCart(){
    if(amountOfProducts === 0) return
    
    const ItemAlreadyInCart = shoppingCart.find(item => item.id === props.product.id)

    if(ItemAlreadyInCart){
      ItemAlreadyInCart.quantity += amountOfProducts
    }else{
      setShoppingCart([...shoppingCart, {
        "id" : props.product.id,
        "quantity" : amountOfProducts
      }])
    }
    setNumberOfitemsInCart(numberOfItemsInCart + amountOfProducts);
    setAmountOfProducts(0)
  }

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
            <Counter 
              counter = {amountOfProducts}
              setCounter = {setAmountOfProducts}
            />
            <AddToCartButton
              onClick={() => handleAddToCart()}
            >
              <ShoppingCart
                size={22}
                weight="fill"
                color={defaultTheme["base-colors"]["base-card"]}
              />
            </AddToCartButton>
          </AddToCartSection>
        </BuyWrapper>
      </ProductDisplayContainer>
    </amountOfProductsContext.Provider>
  )
}