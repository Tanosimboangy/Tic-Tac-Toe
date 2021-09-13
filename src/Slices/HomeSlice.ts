import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface CounterState {
  value: {
    player1: any
    player2: any
  }
}

const initialState: CounterState = {
  value: {
    player1: '',
    player2: '',
  },
}

export const dashbordSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    firstPlayer: (state, action: PayloadAction<any>) => {
      state.value.player1 = action.payload
    },
    secondPlayer: (state, action: PayloadAction<any>) => {
      state.value.player2 = action.payload
    },
  },
})

export const { firstPlayer, secondPlayer } = dashbordSlice.actions
export const selectDashboard = (state: RootState) => state.board.value
export default dashbordSlice.reducer
