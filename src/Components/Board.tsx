import React from 'react'
import styled from 'styled-components'

export interface SquaresProps {
  value?: any
  onClick?: any
}

export interface InputProps {
  squares?: any
  onClick?: any
}

const BoardContainer = styled.div`
  background: #4a4444;
  width: 300px;
  height: 300px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 4px;
  margin-bottom: 30px;
`
const SquareBtn = styled.button<SquaresProps>`
  padding: 0;
  font-size: 80px;
  font-weight: 800;
  background: white;
  color: ${(props) => (props.value === 'X' ? 'red' : 'green')};
`

const Board: React.FC<InputProps> = ({ squares, onClick }) => (
  <BoardContainer>
    {squares.map((square: any, i: any) => (
      <SquareBtn key={i} onClick={() => onClick(i)}>
        {square}
      </SquareBtn>
    ))}
  </BoardContainer>
)

export default Board
