import styled from "styled-components";

export const CartItemDisplayContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 368px;
  height: 80px;

`

export const CartItemWrapper = styled.div`
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
    line-height: 20px;
  }

`

export const EditCartItem = styled.div`
  display: flex;

  width: 172px;
  height: 32px;
`

export const RemoveCartItem = styled.button`
  width: 92px;
  height: 32px;

  background-color: ${props => props.theme["base-colors"]["base-button"]};

`