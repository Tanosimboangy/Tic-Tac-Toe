import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface PlayersScoreState {
  firstPlayer: number
  secondPlayer: number
}

const initialState: PlayersScoreState = {
  firstPlayer: 0,
  secondPlayer: 0,
}

export const playersScoreSlice = createSlice({
  name: 'playersScore',
  initialState,
  reducers: {
    firstPlayerScore: (state) => {
      state.firstPlayer += 1
    },
    secondPlayerScore: (state) => {
      state.secondPlayer += 1
    },
    rebootPlayersScore: (state) => {
      state.firstPlayer = 0
      state.secondPlayer = 0
    },
  },
})

export const { firstPlayerScore, secondPlayerScore, rebootPlayersScore } =
  playersScoreSlice.actions
export const selectPlayersScore = (state: RootState) => state.playersScore
export default playersScoreSlice.reducer
