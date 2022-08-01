import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 72px;
  height: 38px;

  button{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 14px;
    height: 14px;

    color: ${props => props.theme["product-colors"]["purple"]};

    font-family: ${props => props.theme["fonts"]["header"]};
    font-size: 1.6rem;

    border-bottom: 2px solid transparent;
    padding: 8px 0px;

    transition: all 0.2s;

    &:hover{
      color: ${props => props.theme["product-colors"]["purple-dark"]};
    }

    &:focus-visible{
      border-bottom: 2px solid black;
    }
  }

  span{
      font-size: 1.1rem;
      color: ${props => props.theme["base-colors"]["base-title"]};

      padding: 8px 0px;
  }


`