import { configureStore } from '@reduxjs/toolkit';
import mangaReduser from '../slices/MangaSlice/MangaSlice';
import jenresReduser from '../slices/JenreSlice/JenreSlice';
import { initialStateType } from '../slices/MangaSlice/MangaSliceType';
import { JenreStateType } from '../slices/JenreSlice/JenreSliceType';
import userReducer from '../slices/UserSlice/UserSlice';
import { UserSliceType } from '../slices/UserSlice/UserSlice';

export const store = configureStore<{
  mangaReduser: initialStateType;
  jenresReduser: JenreStateType;
  userReducer: UserSliceType;
}>({
  reducer: {
    mangaReduser,
    jenresReduser,
    userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {mangaReduser: MangaState}
export type AppDispatch = typeof store.dispatch;
