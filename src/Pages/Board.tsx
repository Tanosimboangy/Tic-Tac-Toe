import React from 'react'
import Square from './Square'
import styled from 'styled-components'

const BoardContainer = styled.div`
  background: #4a4444;
  width: 300px;
  height: 300px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 4px;
  margin-bottom: 30px;
`
export interface InputProps {
  squares?: any
  onClick?: any
}

const Board: React.FC<InputProps> = ({ squares, onClick }) => (
  <BoardContainer>
    {squares.map((square: any, i: any) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </BoardContainer>
)

export default Board
