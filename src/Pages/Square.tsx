import React from 'react'
import styled from 'styled-components'

export interface SquaresProps {
  value?: any
  onClick?: any
}

const SquareBtn = styled.button<SquaresProps>`
  padding: 0;
  font-size: 80px;
  font-weight: 800;
  background: white;
  color: ${(props) => (props.value === 'X' ? 'red' : 'green')};
`
const Square: React.FC<SquaresProps> = ({ value, onClick }) => {
  return <SquareBtn onClick={onClick}>{value}</SquareBtn>
}

export default Square
