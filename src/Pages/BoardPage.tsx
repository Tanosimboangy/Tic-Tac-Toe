import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../helper'
import styled from 'styled-components'
import {
  useAppSelector,
  // useAppDispatch
} from '../app/hooks'
import { selectDashboard } from '../Components/Home/homeSlice'

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0px 0px 0px;
`
const SubTitle = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  margin: 0px 0px 50px 0px;
`
const RestartBtn = styled.button`
  padding: 16px 20px;
  background: white;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  border-radius: 8px;
  :hover {
    box-shadow: 1px 2px 4px gray;
  }
`

export function BoardPage() {
  const dashboard = useAppSelector(selectDashboard)
  const FirstPlayerName = dashboard.player1
  const SecondPlayerName = dashboard.player2
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(history[stepNumber])
  const clickBoard = xIsNext ? 'X' : 'O'

  const handleClick = (i: any) => {
    const historyPoint = history.slice(0, stepNumber + 1)
    const current = historyPoint[stepNumber]
    const squares = [...current]
    // return if won or occupied
    if (winner || squares[i]) return
    // select square
    squares[i] = clickBoard
    setHistory([...historyPoint, squares])
    setStepNumber(historyPoint.length)
    setXisNext(!xIsNext)
  }

  const Turn = clickBoard === 'X' ? FirstPlayerName : SecondPlayerName
  const Winner = winner === 'X' ? FirstPlayerName : SecondPlayerName

  return (
    <Container>
      <SubTitle>
        {winner === null ? `${Turn}'s turn'` : `${Winner} won`}
      </SubTitle>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <RestartBtn onClick={() => setStepNumber(0)}>Restart</RestartBtn>
    </Container>
  )
}

// const jumpTo = (step: any) => {
//   setStepNumber(step)
//   setXisNext(step % 2 === 0)
// }

// const renderMoves = () =>
//   history.map((_step, move) => {
//     const destination = move ? `Go to move #${move}` : 'Go to Start'
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{destination}</button>
//       </li>
//     )
//   })
