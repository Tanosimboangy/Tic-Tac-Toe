import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import { Homepage } from './components/Homepage/Homepage'
import { Dashboard } from './components/Dashboard/Dashboard'

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
  font-size: 72px;
  line-height: 72px;
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
        <Router>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  )
}

export default App
