import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface TimeState {
  timeRestriction: any
  timeRestart: any
}

const initialState: TimeState = {
  timeRestriction: 3,
  timeRestart: 3,
}

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    timeLimit: (state, action: PayloadAction<any>) => {
      state.timeRestriction = action.payload
      state.timeRestart = action.payload
    },
    startTimer: (state) => {
      state.timeRestriction -= 1
    },
    restartTimer: (state) => {
      state.timeRestriction = state.timeRestart
    },
  },
})

export const { timeLimit, startTimer, restartTimer } = timeSlice.actions
export const selectTime = (state: RootState) => state.time
export default timeSlice.reducer
