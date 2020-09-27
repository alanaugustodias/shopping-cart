import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Lato', sans-serif;
    }
    
    body {
        margin: 0;
    }
`;

const GlobalColors = {
    primary: '#5125db',
    lightGrey: '#fbfbff',
    mediumGrey: '#eaeaea',
    grey: '#656565',
};

export default {
    GlobalStyle,
    GlobalColors
};
