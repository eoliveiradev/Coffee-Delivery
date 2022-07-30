import styled from "styled-components";

export const DefaultHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0px;

  width: 99.9vw;
  height: 104px;

  background-color: ${props => props.theme["base-colors"].background};
  
  border: 1px solid #000000;

  z-index: 999;
`

export const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 95vw;
  max-width: 1120px;
  height: 100%;

  
`

export const HeaderNavigation = styled.nav`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 194px;
  height: 100%;
`

export const LocationSelector = styled.button`
  position: relative;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 143px;
  height: 38px;
  line-height: 12px;

  font-family: ${props => props.theme["fonts"]["header"]};
  font-size: 0.95rem;
  font-weight: bold;
  color: ${props => props.theme["product-colors"]["purple-dark"]};

  background-color: ${props => props.theme["product-colors"]["purple-light"]};

  border-radius: 6px;

  span{
    width: 60%;
  }
`

export const CartWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #F1E9C9;

  width: 38px;
  height: 38px;

  border-radius: 6px;
`