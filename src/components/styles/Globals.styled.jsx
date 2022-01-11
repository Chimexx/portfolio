import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    color:${({ theme }) => theme.colors.cultured};
    background: ${({ theme }) => theme.colors.oxfordBlue};
    font-family: Outfit, 'sans-serif';
    scroll-behavior: smooth;
}

a{
    text-decoration: none;
    color:${({ theme }) => theme.colors.cultured};
    transition: all 250ms ease-in-out;

    &:hover{
        color:${({ theme }) => theme.colors.orangeWeb};
    }

}

ul{
    list-style: none;
}


hr{
    background: linear-gradient(to right, #36d1dc  0%,
   #ff7b00 50%, #36d1dc  100%);
    border: 0;
    height: 0.5px;
}


body{
    max-width: '1440px';
}

::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
    background: ${({ theme }) => theme.colors.bdazzledBlue}
}
::-webkit-scrollbar-thumb{
    background: #162a6b;
    border-radius: 5px;

    &:hover{
        background: #7a7a7a;
    }
}

`;
