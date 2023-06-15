import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins';  
    }
    
    html {
        font-size: 62.5%;
    }
`

export const MainPage = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
`
