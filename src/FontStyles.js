import { createGlobalStyle } from 'styled-components'
import usuazi_hosomozi2 from './Font/usuazi_hosomozi.woff2'
import usuazi_hosomozi from './Font/usuazi_hosomozi.woff'

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${usuazi_hosomozi2}) format('woff2'),
       url(${usuazi_hosomozi}) format('woff');
}
`

export default FontStyles
