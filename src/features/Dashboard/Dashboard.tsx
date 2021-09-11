import React from 'react'
import styled from 'styled-components'
// import { useAppSelector, useAppDispatch } from '../../app/hooks'

const Wrapper = styled.aside`
  display: grid;
  grid-auto-columns: max-content;
  align-self: center;
`
const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const BoradBtn = styled.button`
  outline: none;
  cursor: pointer;
  padding: 25px;
  background: white;
  width: max-content;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  border: 1px solid gray;
`

export function Dashboard() {
  //   const dispatch = useAppDispatch()
  //   const dashboard = useAppSelector(selectDashboard)

  return (
    <Wrapper>
      <Frame>
        <BoradBtn></BoradBtn>
        <BoradBtn></BoradBtn>
        <BoradBtn></BoradBtn>
      </Frame>
      <Frame>
        <BoradBtn></BoradBtn>
        <BoradBtn></BoradBtn>
        <BoradBtn></BoradBtn>
      </Frame>
      <Frame>
        <BoradBtn></BoradBtn>
        <BoradBtn></BoradBtn>
        <BoradBtn></BoradBtn>
      </Frame>
    </Wrapper>
  )
}
