import React, { useState, useEffect } from 'react'
import Board from '../Components/Board'
import { Link } from 'react-router-dom'
import { TimeUnit } from '../Styles/HomePage'
import { calculateWinner } from '../helper'
import { selectTime, startTimer } from '../Slices/timeSlice'
import { selectBoard } from '../Slices/boardSlice'
import { selectPlayers } from '../Slices/playersSlice'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { Time, TimeText, TimeValue } from '../Styles/HomePage'
import { Container, SubTitle, RestartBtn } from '../Styles/BoardPage'
import {
  firstPlayerScore,
  secondPlayerScore,
} from '../Slices/playersScoreSlice'

export function BoardPage() {
  const dispatch = useAppDispatch()
  const board = useAppSelector(selectBoard)
  const time = useAppSelector(selectTime)
  const dashboard = useAppSelector(selectPlayers)

  const [historyState, setHistoryState] = useState(board.history)
  const [step, setStep] = useState(board.stepNumber)
  const [xNext, setXNext] = useState(board.xIsNext)
  const win = calculateWinner(historyState[step])
  const XO = xNext ? 'X' : 'O'

  const handleClick = (i: any) => {
    const historyPoint = historyState.slice(0, step + 1)
    const current = historyPoint[step]
    const squares = [...current]
    if (win || squares[i]) return
    squares[i] = XO
    setStep(historyPoint.length)
    setXNext(!xNext)
    setHistoryState([...historyPoint, squares])
  }

  useEffect(() => {
    if (win === 'X') {
      dispatch(firstPlayerScore())
    } else if (win === 'O') {
      dispatch(secondPlayerScore())
    }
  }, [win, dispatch])

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.timeRestriction > 0) {
        dispatch(startTimer())
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [time.timeRestriction, dispatch])

  const Turn = XO === 'X' ? dashboard.player1 : dashboard.player2
  const Winner = win === 'X' ? dashboard.player1 : dashboard.player2
  const won = win === null ? `${Turn}'s turn'` : `${Winner} won`

  return (
    <Container>
      <SubTitle>
        {historyState.length - 1 === 9 && win === null ? 'Draw !' : `${won}`}
      </SubTitle>
      <Board squares={historyState[step]} onClick={handleClick} />
      {time.timeRestriction === 0 ? (
        <Link to='/'>
          <RestartBtn>Restart</RestartBtn>
        </Link>
      ) : (
        <Time>
          <TimeText>Time left: {time.timeRestriction} s</TimeText>
        </Time>
      )}
    </Container>
  )
}
