import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import animeApi from '../services';

export const getAnimes = createAsyncThunk('anime/getAnimes', async () => {
  const {data} = await animeApi.get('/');
  return data;
})

export const getAnimeByName = createAsyncThunk('anime/getAnimeByName', async (name: string) => {
  const {data} = await animeApi.get(`/${name}`);
  return data;
})

export interface AnimeDTO {
  anime_id: number;
  anime_name: string;
  anime_img: string;
}

export interface AnimeFactDTO {
  fact_id: number;
  fact: string;
}

export interface AnimeState{
  status: 'idle' | 'loading' | 'error';
  list: AnimeDTO[];
  selectedAnime?: {
    success:boolean;
	  total_facts: number;
    img: string;
    data: AnimeFactDTO[]
  };
}

const initialState: AnimeState = {
  status: 'idle',
  list: []
}

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    return builder.addCase(getAnimes.pending, (state) => {
      state.status = 'loading';
    }).addCase(getAnimes.fulfilled, (state,action) => {
      state.status = 'idle';
      state.list = action.payload.data 
    }).addCase(getAnimes.rejected, (state) => {
      state.status = 'error';
    }).addCase(getAnimeByName.pending, (state) => {
      state.status = 'loading';
    }).addCase(getAnimeByName.fulfilled, (state,action) => {
      state.status = 'idle';
      state.selectedAnime = action.payload;
    }).addCase(getAnimeByName.rejected, (state) => {
      state.status = 'error';
    })
  },
})

export const {} = animeSlice.actions;

export default animeSlice.reducer;