import styled from "styled-components";

export const OrderTotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 92px;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 21px;

    font-size: 0.875rem;
    font-weight: 400;
    color: ${props => props.theme["base-colors"]["base-text"]};

    span{
      font-size: 1rem;
    }

    strong{
      font-size: 1.25rem;
      font-weight: 700px;

      color: ${props => props.theme["base-colors"]["base-subtitle"]};
    }
  }
`