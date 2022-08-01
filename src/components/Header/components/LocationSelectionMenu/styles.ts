import styled from "styled-components";

export const LocationSelectionContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  
  position: absolute;
  bottom: -538px;

  height: 558px;
  width: 75vw;
  max-width: 268px;
  right: 50px;

  border: 1px solid black;

  background-color: ${props => props.theme["base-colors"]["background"]};

  overflow-y: scroll;

  border-radius: 6px;
`

export const SelectLocationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 168px;
  line-height: 26px;

  font-family: ${props => props.theme["fonts"]["primary-text"]};
  font-size: 1rem;
  font-weight: bold;

  border-radius: 6px 6px 0px 0px;
  border-bottom: 1px solid ${props => props.theme["product-colors"]["purple-dark"]};
  background-color:  inherit;

  padding-bottom: 0;

  &:focus{
    background-color: ${props => props.theme["product-colors"]["purple-light"]};
    color: ${props => props.theme["product-colors"]["purple-dark"]};
  }

  &:first-child{
    margin-top: 15px;
  }
  &:last-child{
    margin-bottom: 15px;
  }

`
