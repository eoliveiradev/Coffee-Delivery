import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-top: ${props => props.theme["heights"]["header-height"]};
  width: 100%;
  height: 110vh;

  font-family: ${props => props.theme["fonts"]["primary-text"]};
`

