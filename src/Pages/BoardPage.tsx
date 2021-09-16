import React, { useState, useEffect } from 'react'
import Board from '../Components/Board'
import { Link } from 'react-router-dom'
import { calculateWinner } from '../helper'
import { selectBoard } from '../Slices/boardSlice'
import { RestartGame } from '../Slices/restartGame'
import { Time, TimeText } from '../Styles/HomePage'
import { selectPlayers } from '../Slices/playersSlice'
import { selectPlayersScore } from '../Slices/playersScoreSlice'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { Container, SubTitle, RestartBtn } from '../Styles/BoardPage'
import { selectTime, startTimer, restartTimer } from '../Slices/timeSlice'
import {
  firstPlayerScore,
  secondPlayerScore,
} from '../Slices/playersScoreSlice'

export function BoardPage() {
  const dispatch = useAppDispatch()
  const time = useAppSelector(selectTime)
  const board = useAppSelector(selectBoard)
  const dashboard = useAppSelector(selectPlayers)
  const playersScore = useAppSelector(selectPlayersScore)

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
    dispatch(restartTimer())
  }

  const Turn = XO === 'X' ? dashboard.player1 : dashboard.player2
  const Winner = win === 'X' ? dashboard.player1 : dashboard.player2
  const won = win === null ? `${Turn}'s turn'` : `${Winner} won`
  const IsDraw =
    historyState.length - 1 === 9 && win === null ? 'Draw !' : `${won}`
  const winByTime = XO !== 'X' ? dashboard.player1 : dashboard.player2

  useEffect(() => {
    if (win === 'X') {
      dispatch(firstPlayerScore())
    } else if (win === 'O') {
      dispatch(secondPlayerScore())
    } else if (Winner === dashboard.player1) {
      dispatch(firstPlayerScore())
    } else if (Winner === dashboard.player2) {
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

  function RestartButton() {
    dispatch(RestartGame())
    dispatch(restartTimer())
  }

  return (
    <Container>
      <SubTitle>
        {time.timeRestriction === 0
          ? `Time out - ${winByTime} won`
          : `${IsDraw}`}
      </SubTitle>
      <Board squares={historyState[step]} onClick={handleClick} />
      {time.timeRestriction === 0 || win !== null || IsDraw === 'Draw !' ? (
        <Link to='/'>
          <RestartBtn onClick={RestartButton}>Restart</RestartBtn>
        </Link>
      ) : (
        <Time>
          <TimeText>Time left: {time.timeRestriction} s</TimeText>
        </Time>
      )}
    </Container>
  )
}
