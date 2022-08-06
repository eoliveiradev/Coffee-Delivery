import styled from "styled-components"

export const ConfirmOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  width: 95%;
  max-width: 448px;
  height: 536px;
`

export const ConfirmOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 368px;
  height: 370px;

  padding: 40px;

  @media(max-width: 468px){
    padding: 40px 2vw;
  }

  border-radius: 6px;
  background-color: ${props => props.theme["base-colors"]["base-card"]};
`

export const OrderViewer = styled.div`
  width: 100%;
  height: 196px;
  border-bottom: 1px solid ${props => props.theme["base-colors"]["base-button"]};

  overflow-y: auto;

  &::-webkit-scrollbar-track{
    border-radius: 6px;
    background-color: ${props => props.theme["base-colors"]["base-button"]};
  } 

  &::-webkit-scrollbar{
    width: 8px;
    background-color: inherit;
  }

  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: ${props => props.theme["product-colors"]["purple"]};
  }

  .key__holder{
    hr{
      height: 1px;
      width: 100%;

      margin-top: 12px;

      background-color: ${props => props.theme["base-colors"]["base-button"]};
    }

    &:not(:last-child){
      hr{
        margin-bottom: 12px;
      }  
    }
  }
`