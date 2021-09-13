import React from 'react'
import styled from 'styled-components'
// import { useAppSelector, useAppDispatch } from '../../app/hooks'

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0px 0px 0px;
`
const SubTitle = styled.p`
  font-family: Usuazi Hosomozi;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  margin: 0px 0px 93px 0px;
`
const Wrapper = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  align-self: center;
  margin: 0px 0px 68px 0px;
`
const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  button:nth-child(2) {
    border-left: 4px solid #4a4444;
    border-right: 4px solid #4a4444;
  }
  :nth-child(2) {
    border-top: 4px solid #4a4444;
    border-bottom: 4px solid #4a4444;
  }
`
const BoradBtn = styled.button`
  padding: 25px;
  background: white;
  width: max-content;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`
const RestartBtn = styled.button`
  padding: 16px 20px;
  background: white;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  border-radius: 8px;
  :hover {
    box-shadow: 1px 2px 4px gray;
  }
`

export function BoardPage() {
  //   const dispatch = useAppDispatch()
  //   const dashboard = useAppSelector(selectDashboard)

  return (
    <Container>
      <SubTitle>Time out - won</SubTitle>
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
      <RestartBtn>Restart</RestartBtn>
    </Container>
  )
}
