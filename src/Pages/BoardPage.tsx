import React, { useState, useEffect } from 'react'
import Board from '../Components/Board'
import { calculateWinner } from '../helper'
import styled from 'styled-components'
import {
  useAppSelector,
  // useAppDispatch
} from '../app/hooks'
import { selectDashboard } from '../Slices/HomeSlice'
import { Time, TimeText, TimeValue } from '../Styles/HomePage'

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
  const [timeValue, setTimeValue] = useState(6)
  const dashboard = useAppSelector(selectDashboard)
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

  const Turn = clickBoard === 'X' ? dashboard.player1 : dashboard.player2
  const Winner = winner === 'X' ? dashboard.player1 : dashboard.player2

  function TimeCountDown() {
    console.log(timeValue)
    // const timeLimit =
    //   timeValue > 0 && setInterval(() => setTimeValue(timeValue - 1), 1000)
    // return () => clearInterval(timeLimit)
  }
  useEffect(() => {
    // TimeCountDown()
  }, [timeValue])

  return (
    <Container>
      <SubTitle>
        {winner === null ? `${Turn}'s turn'` : `${Winner} won`}
      </SubTitle>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <Time>
        <TimeText>Time left:</TimeText>
        <TimeValue
          value={timeValue}
          type='number'
          onChange={(e: any) => setTimeValue(e.target.value)}
        />
      </Time>
      {/* <RestartBtn onClick={() => setStepNumber(0)}>Restart</RestartBtn> */}
    </Container>
  )
}
