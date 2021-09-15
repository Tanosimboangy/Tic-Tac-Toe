import React, { useState } from 'react'
import Board from '../Components/Board'
import { Link } from 'react-router-dom'
import { calculateWinner } from '../helper'
import { selectTime } from '../Slices/timeSlice'
import { selectPlayers } from '../Slices/playersSlice'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { Time, TimeText, TimeValue } from '../Styles/HomePage'
import { selectBoard, updatingStateHistory } from '../Slices/boardSlice'
import { Container, SubTitle, RestartBtn } from '../Styles/BoardPage'

export function BoardPage() {
  const dispatch = useAppDispatch()
  const board = useAppSelector(selectBoard)
  const time = useAppSelector(selectTime)
  const dashboard = useAppSelector(selectPlayers)

  // const [history, setHistory] = useState([Array(9).fill(null)])
  // const [stepNumber, setStepNumber] = useState(0)
  // const [xIsNext, setXisNext] = useState(true)
  // const winner = calculateWinner(history[stepNumber])
  // const xO = xIsNext ? 'X' : 'O'

  const winner = board.board.winner
  const squares = board.board.squares
  const xO = board.board.xO
  const history = board.board.history
  const stepNumber = board.board.stepNumber

  const handleClick = (i: any) => {
    // const historyPoint = history.slice(0, stepNumber + 1)
    // const current = historyPoint[stepNumber]
    // const squares = [...current]
    // if (winner || squares[i]) return
    squares[i] = xO
    // setHistory([...historyPoint, squares])
    // setStepNumber(historyPoint.length)
    // setXisNext(!xIsNext)
    dispatch(updatingStateHistory())
  }

  const Turn = xO === 'X' ? dashboard.player1 : dashboard.player2
  const Winner = winner === 'X' ? dashboard.player1 : dashboard.player2

  return (
    <Container>
      <SubTitle>
        {winner === null ? `${Turn}'s turn'` : `${Winner} won`}
      </SubTitle>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      {time.timeRestriction === 0 ? (
        ''
      ) : (
        <Time>
          <TimeText>Time left:</TimeText>
          <TimeValue
            type='number'
            onChange={() => ''}
            value={time.timeRestriction}
          />
        </Time>
      )}
      <Link to='/'>
        <RestartBtn>Restart</RestartBtn>
      </Link>
    </Container>
  )
}

// const [timeValue, setTimeValue] = useState(6)
// function TimeCountDown() {
//   console.log(timeValue)
//   const timeLimit =
//     timeValue > 0 && setInterval(() => setTimeValue(timeValue - 1), 1000)
//   return () => clearInterval(timeLimit)
// }
// useEffect(() => {
//   TimeCountDown()
// }, [timeValue])
