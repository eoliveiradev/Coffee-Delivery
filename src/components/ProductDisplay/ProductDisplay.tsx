import { CoffeeItemType } from "../../data/Menu/MenuItems";
import { AddToCartSection, BuyWrapper, AddToCartButton, ProductDisplayContainer, ProductInfo, ProductTags } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import React, { createContext, useContext, useState } from "react";
import { Counter } from "../Counter/Counter";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

type productType = CoffeeItemType
interface productDisplayProps {
  product: productType;
}

export function ProductDisplay(props: productDisplayProps) {
  const {
    shoppingCart,
    setShoppingCart,
  } = useContext(ShoppingCartContext)

  const [amountOfProducts, setAmountOfProducts] = useState(0)

  let itemIndex = shoppingCart.findIndex(item => item.id === props.product.id);
  let newShoppingCart = [...shoppingCart]

  function handleAddToCart() {
    if (amountOfProducts === 0) return
    const ItemAlreadyInCart = shoppingCart.find(item => item.id === props.product.id)

    if (ItemAlreadyInCart) {
      newShoppingCart[itemIndex].quantity += amountOfProducts
      setShoppingCart(newShoppingCart)
    } else {
      setShoppingCart([...shoppingCart, {
        "id": props.product.id,
        "name": props.product.name,
        "description": props.product.description,
        "image": props.product.image,
        "type": props.product.type,
        "extras": props.product.extras,
        "currencySymbol": props.product.currencySymbol,
        "quantity": amountOfProducts,
        "price": props.product.price,
      }])
    }
    setAmountOfProducts(0)
  }

  return (
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
        <div className="price-wrapper">
          {props.product.currencySymbol}
          <strong>
            {props.product.price.toFixed(2)}
          </strong>
        </div>

        <AddToCartSection>
          <Counter
            counter={amountOfProducts}
            setCounter={setAmountOfProducts}
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
  )
}