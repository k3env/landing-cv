import { configureStore, createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  initialState: [],
  name: 'toastsSlice',
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) => state.filter((v) => v.id !== action.payload),
  },
});

export const store = configureStore({
  reducer: {
    toasts: slice.reducer,
  },
});

export const { add, remove } = slice.actions;
export const { reducer } = slice;
