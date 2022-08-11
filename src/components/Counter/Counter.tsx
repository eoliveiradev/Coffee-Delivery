import { CounterContainer } from "./styles"

interface CounterProps{
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export function Counter(props: CounterProps){
  function handleCounter(method : "add" | "remove"){
    const options = {
      "add": () => props.setCounter(props.counter + 1),
      "remove": () => props.counter > 0 && props.setCounter(props.counter - 1)
    }

    options[method]();
  }

  return(
    <CounterContainer>
      <button
        type="button" 
        onClick={() => {handleCounter("remove")}}
      >
        -
      </button>
        <span>
          {props.counter}
        </span>
      <button 
        type="button" 
        onClick={() => {handleCounter("add")}}
      >
        +
      </button>
    </CounterContainer>
  )
}