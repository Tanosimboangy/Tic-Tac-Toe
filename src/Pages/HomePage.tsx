import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../Components/Form'
import { selectPlayers } from '../Slices/playersSlice'
import { selectTime, timeLimit, startTimer } from '../Slices/timeSlice'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
  Wrapper,
  Time,
  TimeText,
  TimeValue,
  StartBtn,
  TimeUnit,
} from '../Styles/HomePage'

export function HomePage() {
  const dispatch = useAppDispatch()
  const time = useAppSelector(selectTime)
  const dashboard = useAppSelector(selectPlayers)

  function TimeCountDown() {
    let timer = 0
    clearInterval(timer)
    var clearTimer = setInterval(() => {
      dispatch(startTimer())
      if (time.timeRestriction >= 0) {
        clearInterval(clearTimer)
      }
    }, 1000)
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
      <Link to='/dashboard'>
        <StartBtn onClick={TimeCountDown} type='button'>
          Start
        </StartBtn>
      </Link>
    </Wrapper>
  )
}

// const timeSet = time.timeRestriction > 0 && setInterval(() => timeLimit(time.timeRestriction - 1), 1000))
// return () => clearInterval(timeSet)
// useEffect(() => {
//   // TimeCountDown()
// }, [time])
