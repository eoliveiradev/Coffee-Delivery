import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    text-decoration: none;
    list-style-type: none;

    font-family: ${props => props.theme["fonts"]["primary-text"]};
  }
  body{
    background-color: ${props => props.theme["base-colors"].background};
    overflow-x: hidden;
  }
  button{
    cursor: pointer;
  }
`

