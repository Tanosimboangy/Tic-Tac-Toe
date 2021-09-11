import React, { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import Round from './icons/round.svg'
import Cross from './icons/cross.svg'

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
const Time = styled.p`
  font-size: 24px;
  line-height: 24px;
  text-align: left;
  padding: 16px 10px 16px 80px;
  color: #000000;
  margin: 0;
  @media (max-width: 760px) {
    font-size: 18px;
    line-height: 18px;
    padding: 16px 10px 16px 80px;
  }
`

function HomePage() {
  const [firstPlayerName, setFirstPlayerName] = useState('')
  const [secondPlayerName, setSecondPlayerName] = useState('')
  return (
    <Wrapper>
      <Frame>
        <Icon src={Round} alt='round-icon' />
        <Input
          type='text'
          value={firstPlayerName}
          onChange={(e) => setFirstPlayerName(e.target.value)}
          placeholder='Leave empty to use AI or enter player name'
        />
      </Frame>
      <Frame>
        <Icon src={Cross} alt='cross-icon' />
        <Input
          type='text'
          value={secondPlayerName}
          onChange={(e) => setSecondPlayerName(e.target.value)}
          placeholder='Leave empty to use AI or enter player name'
        />
      </Frame>
      <Time>Turn time limit in seconds: </Time>
    </Wrapper>
  )
}

export default HomePage
