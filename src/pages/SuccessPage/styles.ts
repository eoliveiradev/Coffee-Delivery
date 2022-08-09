import styled from "styled-components";

export const SuccessPageContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 184px;

  @media(max-width: 1200px){
    align-items: center;
    text-align: center;
    margin-top: 130px;
  }

  h1{
    font-family: ${props => props.theme["fonts"]["header"]};
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme["product-colors"]["yellow-dark"]};
  }

  p{
    font-size: 1.25rem;
    color: ${props => props.theme["base-colors"]["base-subtitle"]};
  }

`

export const DeliveryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-top: 40px;

  @media(max-width: 1200px){
    flex-direction: column;
    gap: 20px;
  }

  .linear-gradient-border{
    padding: 1px;
    border-radius: 6px 36px 6px; 
    background: linear-gradient(to right bottom, #dbac2c, #ff7936, #ff326b, #f100b2, #8047f8);
  }

  .deliveryInfo__container{
    display: flex;
    flex-direction: column;
    gap: 32px;

    width: 90vw;
    max-width: 446px;
    min-height: 190px;

    padding: 40px 40px;
    background-color: ${props => props.theme["base-colors"]["background"]};
    
    border-radius: 6px 36px 6px; 

    @media(max-width: 480px) {
      padding: 40px 2vw;
    }
  }

  img{
    width: 100%;
    max-width: 492px;

    transition: 0.6s;

    @media(min-width: 1200px){
      &:hover{
        transform: translateX(30px);
      }
    }
  }

`


export const OrderInfo = styled.div`
  display: flex;
  gap: 12px;


`