import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface PlayersState {
  player1: any
  player2: any
}

const initialState: PlayersState = {
  player1: '',
  player2: '',
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    firstPlayer: (state, action: PayloadAction<any>) => {
      state.player1 = action.payload
    },
    secondPlayer: (state, action: PayloadAction<any>) => {
      state.player2 = action.payload
    },
    rebootPlayers: (state) => {
      state.player1 = ''
      state.player2 = ''
    },
  },
})

export const { firstPlayer, secondPlayer, rebootPlayers } = playersSlice.actions
export const selectPlayers = (state: RootState) => state.players
export default playersSlice.reducer
