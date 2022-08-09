import styled from "styled-components";

export const SuccessPageContainer = styled.main`
  width: 100%;

  margin-top: ${props => props.theme["heights"]["header-height"]};

`

export const DeliveryInfo = styled.div`
  display: flex;

  .deliveryInfo__container{
    position: relative;

    width: 100%;
    max-width: 446px;

    min-height: 190px;

    padding: 40px;
    background-color: ${props => props.theme["base-colors"]["background"]};
    
    border-radius: 6px 36px 6px; 
 
    .linear-gradient-border{
      position: absolute;

      height: calc(100% + 1px);
      width: calc(100% + 1px);

      border-radius: 6px 36px 6px; 

      left: 50%;
      top: 50%;

      transform: translate(-50%, -50%);

      background: linear-gradient(to right bottom, #dbac2c, #ff7936, #ff326b, #f100b2, #8047f8);

      z-index: -1;
    }

    @media(max-width: 480px) {
      padding: 40px 2vw;
    }
  }

`