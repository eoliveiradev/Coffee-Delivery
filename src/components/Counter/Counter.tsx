import { useContext, useState } from "react"
import { amountOfProductsContext } from "../ProductDisplay/ProductDisplay"
import { CounterContainer } from "./styles"


export function Counter(){
  const {amountOfProducts, setAmountOfProducts} = useContext(amountOfProductsContext)

  function handleCounter(method : string){
    if(method === "remove"){
      if(amountOfProducts > 0){
        setAmountOfProducts(amountOfProducts - 1);
      }
    }
    else if(method === "add"){
      setAmountOfProducts(amountOfProducts + 1);
    }
  }

  return(
    <CounterContainer>
      <button 
        onClick={() => handleCounter("remove")}
      >
        -
      </button>
        <span>
          {amountOfProducts}
        </span>
      <button 
        onClick={() => handleCounter("add")}
      >
        +
      </button>
    </CounterContainer>
  )
}