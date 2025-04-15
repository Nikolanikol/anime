import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { api } from '../../api/axiosInstance';

export interface UserSliceType {
  isAuth: boolean;
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}
const initialState: UserSliceType = {
  isAuth: false,
  displayName: '',
  email: '',
  photoURL: '',
  uid: '',
};

export const userSlice = createSlice({
  name: 'mangaItems',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<UserSliceType>) => {
      state = action.payload;
      console.log(state);
    },
  },
});

export const { setAuth } = userSlice.actions;

export default userSlice.reducer;
