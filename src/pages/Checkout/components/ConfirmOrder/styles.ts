import styled from "styled-components"

export const ConfirmOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 448px;
  height: 536px;
`

export const ConfirmOrderWrapper = styled.div`
  width: 100%;
  height: 498px;

  border-radius: 6px;
  background-color: ${props => props.theme["base-colors"]["base-card"]};
`