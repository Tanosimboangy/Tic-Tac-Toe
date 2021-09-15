import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface PlayersScoreState {
  playerScore1: any
  playerScore2: any
}

const initialState: PlayersScoreState = {
  playerScore1: '',
  playerScore2: '',
}

export const playersScoreSlice = createSlice({
  name: 'playersScore',
  initialState,
  reducers: {
    firstPlayer: (state) => {
      state.playerScore1 += 1
    },
    secondPlayer: (state) => {
      state.playerScore1 += 1
    },
  },
})

export const { firstPlayer, secondPlayer } = playersScoreSlice.actions
export const selectPlayersScore = (state: RootState) => state.playersScore
export default playersScoreSlice.reducer
