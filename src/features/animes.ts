import {createSlice} from '@reduxjs/toolkit'

export interface AnimeState{
  status: 'idle' | 'loading' | 'error';
}

const initialState: AnimeState = {
  status: 'idle'
}

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {

  }
})

export const {} = animeSlice.actions;

export default animeSlice.reducer;