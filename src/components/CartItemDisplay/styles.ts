import styled from "styled-components";

export const CartItemDisplayContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 80px;

  .price__container{
    position: absolute;

    top: 8px;
    right: 4px;

    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme["base-colors"]["base-text"]};
  }
`

export const CartItemWrapper = styled.div`
  position: relative;

  display: flex;
  gap: 20px;

  width: 256px;
  height: 64px;

  img{
    width: 64px;
    height: 64px;
  }
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 62px;

  h1{
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    color: ${props => props.theme["base-colors"]["base-subtitle"]};
  }
`

export const EditCartItem = styled.div`
  display: flex;
  gap: 8px;

  width: 172px;
  height: 32px;

  .counter__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 72px;
    height: 32px;

    border-radius: 6px;

    background-color: ${props => props.theme["base-colors"]["base-button"]};
  }
`

export const RemoveCartItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 92px;
  height: 32px;

  font-size: 0.75rem;
  color: ${props => props.theme["base-colors"]["base-text"]};

  background-color: ${props => props.theme["base-colors"]["base-button"]};
`