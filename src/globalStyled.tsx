import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    :root{
        --color-very-dark-gray: hsl(0, 0%, 17%);
        --color-dark-gray: hsl(0, 0%, 59%);
    }

    body{
        font-family:'Rubik', sans-serif;
    }
`