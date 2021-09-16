import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../Components/Form'
import { selectTime, timeLimit } from '../Slices/timeSlice'
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
        <StartBtn type='button'>Start</StartBtn>
      </Link>
    </Wrapper>
  )
}
