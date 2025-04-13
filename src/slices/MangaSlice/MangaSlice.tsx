import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import MangaItem from '../../Types/Item';

import { api } from '../../api/axiosInstance';
import { initialStateType } from './MangaSliceType';

const initialState: initialStateType = {
  isLoading: true,

  items: [
    {
      id: 272,
      name: "D'v",
      russian: 'Примадонна',
      image: {
        original: '/system/mangas/original/272.jpg?1712729482',
        preview: '/system/mangas/preview/272.jpg?1712729482',
        x96: '/system/mangas/x96/272.jpg?1712729482',
        x48: '/system/mangas/x48/272.jpg?1712729482',
      },
      url: '/mangas/272-d-v',
      kind: 'manga',
      score: '5.64',
      status: 'released',
      volumes: 3,
      chapters: 20,
      aired_on: '1999-06-26',
      released_on: '2002-02-26',
    },
  ],
};
export const fetchMangaItems = createAsyncThunk(
  'manga/fetchMangaItems',
  async (params: { limit: number; page: number; genre?: number }) => {
    console.log('dispatching');
    try {
      const response = await api().get('/mangas', {
        params,
      });
      return response.data; // Извлекаем данные из ответа API
    } catch (error) {
      console.log(error);
    }
  },
);

export const mangaSlice = createSlice({
  name: 'mangaItems',
  initialState,
  reducers: {
    setJenre: (state, action: PayloadAction<number>) => {
      state.jenre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMangaItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchMangaItems.fulfilled,
        (state, action: PayloadAction<MangaItem[]>) => {
          state.isLoading = false;
          state.items = action.payload;
        },
      )
      .addCase(fetchMangaItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setJenre } = mangaSlice.actions;

export default mangaSlice.reducer;
