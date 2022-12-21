import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["blue-dark"]};
    }

    body, html {
        height: 100%;
    }

    body {
        background-color: ${({ theme }) => theme["gray-600"]};
        color: ${({ theme }) => theme["gray-300"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, span, strong, button {
        font: 400 1rem 'Inter', sans-serif;
        line-height: 140%;
    }

    button {
        border: 0;
        cursor: pointer;
    }
`;
