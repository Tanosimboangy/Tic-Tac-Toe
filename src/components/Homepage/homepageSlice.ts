import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { fetchCount } from './homepageAPI'

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
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: any) => {
    const response = await fetchCount(amount)
    return response.data
  }
)

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
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value.player1 = action.payload
    })
  },
})

export const { firstPlayer, secondPlayer } = dashbordSlice.actions
export const selectDashboard = (state: RootState) => state.dashboard.value
export default dashbordSlice.reducer
