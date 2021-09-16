import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface BoardState {
  history: any
  stepNumber: any
  xIsNext: any
  xO: any
  winner: any
}

const initialState: BoardState = {
  history: [Array(9).fill(null)],
  stepNumber: 0,
  xIsNext: true,
  winner: '',
  xO: '',
}

export const boardSlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    updatingStateHistory: (state) => {},
  },
})
export const { updatingStateHistory } = boardSlice.actions
export const selectBoard = (state: RootState) => state.board
export default boardSlice.reducer
