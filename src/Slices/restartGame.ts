import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface PlayersState {
  IsRestart: any
}

const initialState: PlayersState = {
  IsRestart: false,
}

export const IsRestartGameSlice = createSlice({
  name: 'restart',
  initialState,
  reducers: {
    RestartGame: (state) => {
      state.IsRestart = !state.IsRestart
    },
  },
})

export const { RestartGame } = IsRestartGameSlice.actions
export const selectRestartGame = (state: RootState) => state.restart
export default IsRestartGameSlice.reducer
