import React from 'react'
import Round from '../Icons/round.svg'
import Cross from '../Icons/cross.svg'
import { Frame, Icon, Input, PlayerScore } from '../Styles/HomePage'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
  firstPlayer,
  secondPlayer,
  selectPlayers,
} from '../Slices/playersSlice'
import { selectPlayersScore } from '../Slices/playersScoreSlice'

export function Form() {
  const dispatch = useAppDispatch()
  const dashboard = useAppSelector(selectPlayers)
  const playerScore = useAppSelector(selectPlayersScore)

  return (
    <>
      <Frame>
        <Icon src={Round} alt='round-icon' />
        <PlayerScore>
          {dashboard.player1 && playerScore.firstPlayer} -
        </PlayerScore>
        <Input
          type='text'
          value={dashboard.player1}
          onChange={(e) => dispatch(firstPlayer(e.target.value))}
          placeholder='Leave empty to use AI or enter player name'
        />
      </Frame>
      <Frame>
        <Icon src={Cross} alt='cross-icon' />
        <PlayerScore>
          {dashboard.player2 && playerScore.secondPlayer} -
        </PlayerScore>
        <Input
          type='text'
          value={dashboard.player2}
          onChange={(e: any) => dispatch(secondPlayer(e.target.value))}
          placeholder='Leave empty to use AI or enter player name'
        />
      </Frame>
    </>
  )
}
