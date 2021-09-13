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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDashboard = (state: RootState) => state.board.value

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default dashbordSlice.reducer
