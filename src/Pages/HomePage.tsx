import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../Components/Form'
import { selectPlayers } from '../Slices/playersSlice'
import { selectTime, timeLimit } from '../Slices/timeSlice'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
  Wrapper,
  Time,
  TimeText,
  TimeValue,
  StartBtn,
} from '../Styles/HomePage'

export function HomePage() {
  const dispatch = useAppDispatch()
  const time = useAppSelector(selectTime)
  const dashboard = useAppSelector(selectPlayers)

  function TimeCountDown() {
    // const timeLimit = time.timeRestriction > 0 && setInterval(() => timeLimit(timeValue - 1), 1000))
    // return () => clearInterval(timeLimit)
  }
  useEffect(() => {
    // TimeCountDown()
  }, [time])

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
      </Time>
      <Link to='/dashboard'>
        <StartBtn onClick={TimeCountDown} type='button'>
          Start
        </StartBtn>
      </Link>
    </Wrapper>
  )
}
