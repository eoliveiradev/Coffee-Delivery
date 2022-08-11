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

    @media(max-width: 368px){
      font-size: 1.8rem
    }
  }

  p{
    font-size: 1.25rem;
    color: ${props => props.theme["base-colors"]["base-subtitle"]};
    
    @media(max-width: 368px){
      font-size: 1.15rem
    }
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

  min-height: 42px;

  .icon__wrapper{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;

    border-radius: 50%;
  }

  .purple{
    background-color: ${props => props.theme["product-colors"]["purple"]};
  }

  .yellow{
    background-color: ${props => props.theme["product-colors"]["yellow"]};
  }

  .yellow-dark{
    background-color: ${props => props.theme["product-colors"]["yellow-dark"]};
  }

  .info__wrapper{
    p, h1, strong{
      font-size: 1rem;
      color: ${props => props.theme["base-colors"]["base-text"]};
      font-family: ${props => props.theme["fonts"]["primary-text"]};
    }
    
    h1{
      font-weight: 400;
    }

    strong{
      font-weight: bold;
    }

    @media(max-width: 1200px){
      text-align: left;
    }
  }

`


export const NoConfirmedOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  width: 100%;

  margin-top: 80px;

  h1{
    line-height: 2.3rem;
  }


  #back-to-home-btn{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      padding: 0.5rem 1rem;
      background-color: red;
      
      border-radius: 6px;

      font-family: ${props => props.theme["fonts"]["header"]};
      font-size: 1.1rem;
      font-weight: 700;
      color: ${props => props.theme["product-colors"]["purple-dark"]};


      background-color: ${props => props.theme["product-colors"]["purple-light"]};

      &:hover, :focus-visible{
        outline: 2px solid black;
        outline-offset: 2px;
      }

      #arrow-icon{
        color: ${props => props.theme["product-colors"]["purple"]};
      }
    }
`