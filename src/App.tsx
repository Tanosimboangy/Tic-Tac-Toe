import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import { HomePage } from './Pages/HomePage'
import { BoardPage } from './Pages/BoardPage'

const Container = styled.article`
  font-style: normal;
  font-weight: normal;
  background: white;
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: auto;
  padding-block-end: 40px;
  padding-top: 40px;
  @media (max-width: 760px) {
    max-width: 90%;
    margin: auto;
  }
`
const Title = styled.h1`
  font-size: 72px;
  line-height: 72px;
  color: #000000;
  @media (max-width: 760px) {
    font-size: 48px;
    line-height: 48px;
  }
`

function App() {
  return (
    <div className='App'>
      <Container>
        <Title>Tic tac toe</Title>
        <Router>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path='/dashboard'>
              <BoardPage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  )
}

export default App
