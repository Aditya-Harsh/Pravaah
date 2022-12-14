import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
}
body{
    font-size: 1.2rem;
    font-weight: 400;
    background-color: #03091F;
    font-family: 'Montserrat', sans-serif;
    color:white;
    ::-webkit-scrollbar{
        width: 8px;
    }
    ::-webkit-scrollbar-track{
        background: #ccc;
    }
    ::-webkit-scrollbar-thumb{
        background: linear-gradient(180deg, #7F41DB 0%, #022894 100%);
        border-radius: 24px;
    }
}
a{
    color: inherit;
    font-family: inherit;
    text-decoration:none;
}
p{
    line-height: 2rem;
}

.GradientText{
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.Big{
    font-size: 300%;
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.Small{
    font-size: 200%;
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}



`;

export default GlobalStyle;