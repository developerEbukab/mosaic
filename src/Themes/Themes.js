import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#EEEEEE",
  fontColor: "#000",
  contentColor: "#fff",
  greyColor: "#A1A1A1"
}

export const darkTheme = {
  body: "#131313",
  fontColor: "#fff",
  contentColor: "#1F1F1F",
  greyColor: "#A1A1A1"
}

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${props => props.theme.body};
    color: ${props => props.isTourOpen ? "rgba(0, 0, 0, .5)" : props.theme.fontColor};
    transition: background-color 1s ease;
  }
`;