import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  align-items: flex-start;

  width: 100%;
  min-height: calc(100vh - ${props => props.theme["heights"]["header-height"]});
  margin-top: ${props => props.theme["heights"]["header-height"]};

  h1{
    font-family: ${props => props.theme["fonts"]["header"]};
  }

  .wrapper{
    display: flex;
    justify-content: center;
    gap: 64px 32px;

    flex-wrap: wrap;
    width: 100%;
    min-height: 592px;


    margin-top: 40px;

    .checkout-title{
      width: 100%;
      line-height: 23px;

      font-size: 1.125rem;
      font-weight: 700;

      color: ${props => props.theme["base-colors"]["base-subtitle"]};

      @media(max-width: 1200px){
        text-align: center;
      }
    }
  }
`



