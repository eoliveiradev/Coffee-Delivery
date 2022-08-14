import styled from "styled-components";

export const LocationSelectionContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
  position: absolute;
  top: 80px;

  right: 6%;

  width: 75vw;
  max-width: 180px;

  padding: 10px 20px;

  border: 1px solid black;

  background-color: ${props => props.theme["base-colors"]["background"]};

  border-radius: 6px;

  h1{
    font-family: ${props => props.theme["fonts"]["header"]};
    font-size: 0.8rem;
    font-weight: 700;
    color: ${props => props.theme["base-colors"]["base-title"]};
    
  }

  #invalid-cep-message{
    font-size: 0.8rem;
    color: #a6312b;
  }

  button{
    width: 100%;
    min-height: 26px;

    border-radius: 6px;

    font-size: 0.8rem;
    color: white;

    background-color: ${props => props.theme["product-colors"]["yellow"]};
  }

`

export const CepInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 100%;

  input{
    height: 30px;

    text-indent: 10px;
    text-align: center;

    border: 1px solid ${props => props.theme["base-colors"]["base-button"]};
    border-radius: 4px;
    
    background:  ${props => props.theme["base-colors"]["base-input"]};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  #cep-first-part{
    width: 50%;
  }

  #cep-second-part{
    width: 40%;
  }
`