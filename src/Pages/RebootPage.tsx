import React from 'react'
import styled from 'styled-components'
import Round from '../icons/round.svg'
import Cross from '../icons/cross.svg'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { firstPlayer, secondPlayer } from '../Slices/HomeSlice'

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 103px 0px 0px 0px;
`
const Frame = styled.div`
  position: relative;
`
const Icon = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  left: 10px;
`
const Input = styled.input`
  background: white;
  border: none;
  outline: none;
  padding: 16px 10px 16px 80px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 24px;
  line-height: 24px;
  width: -webkit-fill-available;
  ::placeholder {
    font-size: 24px;
    line-height: 24px;
  }
  :hover {
    box-shadow: 1px 2px 4px gray;
  }
  @media (max-width: 760px) {
    font-size: 18px;
    line-height: 18px;
    ::placeholder {
      font-size: 18px;
      line-height: 18px;
    }
  }
`
const Time = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 37px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
const TimeText = styled.span`
  font-size: 24px;
  line-height: 24px;
  text-align: left;
  color: #000000;
  margin: 0;
  margin-right: 4px;
  white-space: nowrap;
  @media (max-width: 760px) {
    font-size: 18px;
    line-height: 18px;
    padding: 16px 0px 16px 0px;
  }
`
const TimeValue = styled.input`
  background: white;
  border-radius: 5px;
  font-size: 20px;
  line-height: 20px;
  max-width: 40px;
`
const Btn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  background: white;
  border-radius: 4px;
  width: max-content;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  align-self: center;
  :hover {
    box-shadow: 1px 2px 4px gray;
  }
`
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

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
