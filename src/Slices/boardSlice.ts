import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { calculateWinner } from '../helper'

// history: Array<any>

export interface BoardState {
  board: {
    history: any
    stepNumber: any
    xIsNext: any
    xO: any
    winner: any
    historyPoint: any
    current: any
    squares: any
  }
}

const initialState: BoardState = {
  board: {
    history: [Array(9).fill(null)],
    stepNumber: 0,
    xIsNext: true,
    winner: '',
    xO: '',
    historyPoint: [],
    current: [],
    squares: [],
  },
}

export const boardSlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    updatingStateHistory: (state) => {
      // state.board.winner = calculateWinner(
      //   state.board.history[state.board.stepNumber]
      // )
      // state.board.xO = state.board.xIsNext ? 'X' : 'O'
      // state.board.historyPoint = state.board.history.slice(
      //   0,
      //   state.board.stepNumber
      // )
      // state.board.current = state.board.historyPoint[state.board.stepNumber]
      // state.board.squares = [...state.board.current]
      // state.board.history = [...state.board.historyPoint, state.board.squares]
      // state.board.stepNumber = state.board.historyPoint.length
      // state.board.xIsNext = !state.board.xIsNext
    },
  },
})

export const { updatingStateHistory } = boardSlice.actions
export const selectBoard = (state: RootState) => state.board
export default boardSlice.reducer
