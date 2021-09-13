import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    // @font-face {
    //     font-family: "Lato_bold";
    //     src: local(Lato), 
    //     url(/fonts/Lato-Bold.woff2) format("woff2"), 
    //     url(/fonts/Lato-Bold.woff) format("woff"), 
    // }
    // @font-face {
    //     font-family: "Lato";
    //     src: local(Lato), 
    //     url(/fonts/Lato-Regular.woff2) format("woff2"), 
    //     url(/fonts/Lato-Regular.woff) format("woff"), 
    // }
    html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        background: #FFFFFF;
        font-size: 16px;
        margin: 0;
        padding: 0;
        h1, h2, h3, h4, h5, h6, p {
            margin: 0;
        }
        ul {
            padding: 0;
            margin: 0;
            li {
                list-style: none;
            }
        }
        a {
            text-decoration: none;
        }
        button, input {
            outline: none;
            border: none;
            cursor: pointer;
        }
    }
`
