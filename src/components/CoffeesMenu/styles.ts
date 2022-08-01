import styled from "styled-components";

export const CoffeesMenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 6rem;
  gap: 2rem;

  #title{
    width: 100%;

    font-family: ${props => props.theme["fonts"]["header"]};
    font-size: 2rem;
    color: ${props => props.theme["base-colors"]["base-subtitle"]};

    @media(max-width: 1200px){
      text-align: center;
    }
  }
`

export const Coffees = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px 32px;
  flex-wrap: wrap;

  width: 100%;
`