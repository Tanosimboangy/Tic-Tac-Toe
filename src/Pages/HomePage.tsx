import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../Components/Form'
import { selectRestartGame } from '../Slices/restartGame'
import { rebootPlayers } from '../Slices/playersSlice'
import { selectTime, timeLimit } from '../Slices/timeSlice'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { rebootPlayersScore } from '../Slices/playersScoreSlice'
import {
  Wrapper,
  Time,
  TimeText,
  TimeValue,
  StartBtn,
  TimeUnit,
  Btnwrapper,
} from '../Styles/HomePage'

export function HomePage() {
  const dispatch = useAppDispatch()
  const time = useAppSelector(selectTime)
  const restart = useAppSelector(selectRestartGame)

  function Reboot() {
    dispatch(rebootPlayers())
    dispatch(rebootPlayersScore())
  }

  return (
    <Wrapper>
      <Form />
      <Time>
        <TimeText>Turn time limit in seconds:</TimeText>
        <TimeValue
          type='number'
          value={time.timeRestriction}
          onChange={(e: any) => dispatch(timeLimit(e.target.value))}
        />
        <TimeUnit>s</TimeUnit>
      </Time>
      {restart.IsRestart === true ? (
        <Btnwrapper>
          <Link to='/dashboard'>
            <StartBtn type='button'>Play again</StartBtn>
          </Link>
          <StartBtn onClick={() => Reboot()}>Reboot</StartBtn>
        </Btnwrapper>
      ) : (
        <Link to='/dashboard'>
          <StartBtn type='button'>Start</StartBtn>
        </Link>
      )}
    </Wrapper>
  )
}
