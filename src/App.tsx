import React from 'react'
import './App.css'
import styled from 'styled-components'
import HomePage from './HomePage'
import { Dashboard } from './features/Dashboard/Dashboard'

const Container = styled.article`
  font-family: Usuazi Hosomozi;
  font-style: normal;
  font-weight: normal;
  background: white;
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: auto;
  padding-block-end: 40px;
  @media (max-width: 760px) {
    max-width: 90%;
    margin: auto;
  }
`
const Title = styled.h1`
  padding: 20px 10px;
  font-size: 72px;
  line-height: 72px;
  margin: 0;
  color: #000000;
  @media (max-width: 760px) {
    font-size: 32px;
    line-height: 32px;
  }
`
function App() {
  return (
    <div className='App'>
      <Container>
        <Title>Tic tac toe</Title>
        <HomePage />
        <Dashboard />
      </Container>
    </div>
  )
}

export default App
