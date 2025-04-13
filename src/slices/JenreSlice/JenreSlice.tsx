import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Jenre } from './JenreSliceType';
import { api } from '../../api/axiosInstance';
import { JenreStateType } from './JenreSliceType';

const initialState: JenreStateType = {
  isJenreLoading: true,

  jenres: [
    {
      id: 89,
      name: 'Police',
      russian: 'Полиция',
      kind: 'genre',
      entry_type: 'Manga',
    },
  ],
};
export const fetchJenres = createAsyncThunk('jenre/fetchJenres', async () => {
  console.log('dispatching');
  try {
    const response = await api().get('/genres');
    return response.data; // Извлекаем данные из ответа API
  } catch (error) {
    console.log(error);
  }
});

export const jenresSlice = createSlice({
  name: 'mangaItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJenres.pending, (state) => {
        state.isJenreLoading = true;
      })
      .addCase(
        fetchJenres.fulfilled,
        (state, action: PayloadAction<Jenre[]>) => {
          state.isJenreLoading = false;
          state.jenres = action.payload;
        },
      )
      .addCase(fetchJenres.rejected, (state) => {
        state.isJenreLoading = false;
      });
  },
});

export const {} = jenresSlice.actions;

export default jenresSlice.reducer;
