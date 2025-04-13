import { configureStore } from '@reduxjs/toolkit';
import mangaReduser from '../slices/MangaSlice/MangaSlice';
import jenresReduser from '../slices/JenreSlice/JenreSlice';
import { initialStateType } from '../slices/MangaSlice/MangaSliceType';
import { JenreStateType } from '../slices/JenreSlice/JenreSliceType';
export const store = configureStore<{
  mangaReduser: initialStateType;
  jenresReduser: JenreStateType;
}>({
  reducer: {
    mangaReduser,
    jenresReduser,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {mangaReduser: MangaState}
export type AppDispatch = typeof store.dispatch;
