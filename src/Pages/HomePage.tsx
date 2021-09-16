import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../Components/Form'
// import { selectPlayers } from '../Slices/playersSlice'
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
  // const dashboard = useAppSelector(selectPlayers)

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.timeRestriction > 0) {
        dispatch(startTimer)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [time.timeRestriction])

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
        <StartBtn onClick={() => dispatch(startTimer)} type='button'>
          Start
        </StartBtn>
      </Link>
    </Wrapper>
  )
}
