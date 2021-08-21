import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AbcNewsState } from './types';

const initialState: AbcNewsState = {
  response: null,
  loading: false,
  error: null,
};

const abcNewsSlice = createSlice({
  name: 'mainNewsSlice',
  initialState,
  reducers: {
    // getMainNewsData() {},
    setAbcNewsData(state, action: PayloadAction<AbcNewsState>) {
      const mainNewsData = action.payload;
      return { ...state, ...mainNewsData };
    },
  },
});

export const { setAbcNewsData } = abcNewsSlice.actions;

export default abcNewsSlice.reducer;
