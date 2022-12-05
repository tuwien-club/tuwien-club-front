import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type lastVisitedState = {
  lastVisited: string
}

const initialState: lastVisitedState = {lastVisited: ''}

const lastVisitedSlice = createSlice({
  name: 'lastVisited',
  initialState,
  reducers: {
    lastVisitedChange: (state, action: PayloadAction<string>) => {
      state.lastVisited = action.payload
    },
    lastVisitedClear: state => {
      state.lastVisited = ''
    }
  }
})

export const {lastVisitedChange, lastVisitedClear} = lastVisitedSlice.actions

export default lastVisitedSlice.reducer
