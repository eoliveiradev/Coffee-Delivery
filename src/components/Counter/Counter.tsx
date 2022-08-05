import { useContext, useState } from "react"
import { amountOfProductsContext } from "../ProductDisplay/ProductDisplay"
import { CounterContainer } from "./styles"

interface CounterProps{
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  handleCounterChange?: () => void;
}

export function Counter(props: CounterProps){

  function handleCounter(method : string){
    if(method === "remove"){
      if(props.counter > 0){
        props.setCounter(props.counter - 1);
      }
    }
    else if(method === "add"){
      props.setCounter(props.counter + 1);
    }
  }

  return(
    <CounterContainer>
      <button
        type="button" 
        onClick={() => {
          handleCounter("remove");
          if(props.handleCounterChange){
            props.handleCounterChange()
          }
        }}
      >
        -
      </button>
        <span>
          {props.counter}
        </span>
      <button 
        type="button" 
        onClick={() => {
          handleCounter("add");
          if(props.handleCounterChange){
            props.handleCounterChange()
          }
        }}
      >
        +
      </button>
    </CounterContainer>
  )
}