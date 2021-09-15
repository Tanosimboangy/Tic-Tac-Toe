import React from 'react'
import Round from '../icons/round.svg'
import Cross from '../icons/cross.svg'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { TimeUnit } from '../Styles/HomePage'
import { firstPlayer, secondPlayer } from '../Slices/playersSlice'
import {
  Wrapper,
  Frame,
  Icon,
  Input,
  Time,
  TimeText,
  TimeValue,
  Btn,
  BtnContainer,
} from '../Styles/RebootPage'

export function RebootPage() {
  const dispatch = useAppDispatch()
  const [timeValue, setTimeValue] = React.useState(3)

  return (
    <Wrapper>
      <Frame>
        <Icon src={Round} alt='round-icon' />
        <Input
          type='text'
          onChange={(e) => dispatch(firstPlayer(e.target.value))}
        />
      </Frame>
      <Frame>
        <Icon src={Cross} alt='cross-icon' />
        <Input
          type='text'
          onChange={(e: any) => dispatch(secondPlayer(e.target.value))}
        />
      </Frame>
      <Time>
        <TimeText>Turn time limit in seconds:</TimeText>
        <TimeValue
          value={timeValue}
          type='number'
          onChange={(e: any) => setTimeValue(e.target.value)}
        />
        <TimeUnit>s</TimeUnit>
      </Time>
      <BtnContainer>
        <Link to='/dashboard'>
          <Btn type='button'>Play again</Btn>
        </Link>
        <Link to='/'>
          <Btn type='button'>Reboot</Btn>
        </Link>
      </BtnContainer>
    </Wrapper>
  )
}
