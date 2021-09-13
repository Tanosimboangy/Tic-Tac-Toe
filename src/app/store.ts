import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../Components/counter/counterSlice'
import boardReducer from '../Components/Home/homeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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
