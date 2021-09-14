import React from 'react'
import Round from '../Icons/round.svg'
import Cross from '../Icons/cross.svg'
import { Frame, Icon, Input } from '../Styles/HomePage'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
  firstPlayer,
  secondPlayer,
  selectPlayers,
} from '../Slices/playersSlice'

export function Form() {
  const dispatch = useAppDispatch()
  const dashboard = useAppSelector(selectPlayers)

  return (
    <>
      <Frame>
        <Icon src={Round} alt='round-icon' />
        <Input
          type='text'
          value={dashboard.player1}
          onChange={(e) => dispatch(firstPlayer(e.target.value))}
          placeholder='Leave empty to use AI or enter player name'
        />
      </Frame>
      <Frame>
        <Icon src={Cross} alt='cross-icon' />
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
