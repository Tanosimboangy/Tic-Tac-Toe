import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface TimeState {
  timeRestriction: any
}

const initialState: TimeState = {
  timeRestriction: 3,
}

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    timeLimit: (state, action: PayloadAction<any>) => {
      state.timeRestriction = action.payload
    },
    startTimer: (state) => {
      state.timeRestriction -= 1
    },
  },
})

export const { timeLimit, startTimer } = timeSlice.actions
export const selectTime = (state: RootState) => state.time
export default timeSlice.reducer
