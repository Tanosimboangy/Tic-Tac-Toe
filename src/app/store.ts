import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import playersReducer from '../Slices/playersSlice'
import boardReducer from '../Slices/boardSlice'
import timeReducer from '../Slices/timeSlice'
import playersScoreReducer from '../Slices/playersScoreSlice'
import counterReducer from '../Components/counter/counterSlice'

export const store = configureStore({
  reducer: {
    players: playersReducer,
    counter: counterReducer,
    time: timeReducer,
    playersScore: playersScoreReducer,
    board: boardReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
