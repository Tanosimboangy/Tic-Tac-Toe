import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AddPlayersForm } from '../Components/AddPlayersForm'
import { useAppSelector } from '../app/hooks'
import { selectDashboard } from '../Slices/HomeSlice'
import {
  Wrapper,
  Time,
  TimeText,
  TimeValue,
  StartBtn,
} from '../Styles/HomePage'

export function HomePage() {
  const [timeValue, setTimeValue] = useState(6)
  const dashboard = useAppSelector(selectDashboard)
  console.log(dashboard)

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
    <Wrapper>
      <AddPlayersForm />
      <Time>
        <TimeText>Turn time limit in seconds:</TimeText>
        <TimeValue
          value={timeValue}
          type='number'
          onChange={(e: any) => setTimeValue(e.target.value)}
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
