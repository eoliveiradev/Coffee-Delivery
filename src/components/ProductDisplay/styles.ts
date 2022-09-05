import styled from "styled-components";

export const ProductDisplayContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 256px;
  height: 310px;

  background-color: ${props => props.theme["base-colors"]["base-card"]};

  border-radius: 6px 36px 6px 36px;

  img{
    position: absolute;
    top: -20px;
    width: 120px;
  }
`

export const ProductTags = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;

  width: 216px;

  margin-top: 100px;

  li{
    display: flex;
    justify-content: center;
    align-items: center;

    height: 21px;

    font-size: 0.625rem;
    font-weight: bold;
    color: ${props => props.theme["product-colors"]["yellow-dark"]};

    padding: 4px 8px;
    border-radius: 100px;

    background-color: ${props => props.theme["product-colors"]["yellow-light"]};

    text-transform: uppercase;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 216px;
  height: 70px;

  h1{
    font-family: ${props => props.theme["fonts"]["header"]};
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme["base-colors"]["base-subtitle"]};
    line-height: 26px;
  }

  p{
    font-size: 0.875rem;
    color: ${props => props.theme["base-colors"]["base-label"]};
    text-align: center;

    overflow-y: auto;
  }
`

export const BuyWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 208px;
  height: 38px;

  font-size: 0.875rem;

  .price-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 67px;
  }

  strong{
    font-size: 1.5rem;
    color: ${props => props.theme["base-colors"]["base-text"]};
  }
`

export const AddToCartSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 118px;
  height: 38px;
`

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;

  border-radius: 6px;
  
  background-color: ${props => props.theme["product-colors"]["purple-dark"]};

  transition: background-color 0.2s ease-in-out;

  &:hover{
    background-color: ${props => props.theme["product-colors"]["purple"]};
  }

  &:focus-visible{
    outline: 2px solid black;
    outline-offset: 2px;
    background-color: ${props => props.theme["product-colors"]["purple"]};
  }
`