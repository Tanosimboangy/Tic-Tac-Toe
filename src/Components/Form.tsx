import React from 'react'
import Round from '../Icons/round.svg'
import Cross from '../Icons/cross.svg'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { firstPlayer, secondPlayer, selectDashboard } from '../Slices/HomeSlice'
import { Frame, Icon, Input } from '../Styles/HomePage'

export function Form() {
  const dispatch = useAppDispatch()
  const dashboard = useAppSelector(selectDashboard)
  console.log(dashboard)

  return (
    <>
      <Frame>
        <Icon src={Round} alt='round-icon' />
        <Input
          type='text'
          onChange={(e) => dispatch(firstPlayer(e.target.value))}
          placeholder='Leave empty to use AI or enter player name'
        />
      </Frame>
      <Frame>
        <Icon src={Cross} alt='cross-icon' />
        <Input
          type='text'
          onChange={(e: any) => dispatch(secondPlayer(e.target.value))}
          placeholder='Leave empty to use AI or enter player name'
        />
      </Frame>
    </>
  )
}
