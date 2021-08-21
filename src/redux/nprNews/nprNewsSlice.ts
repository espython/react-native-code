import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NbrNewsState } from './types';

const initialState: NbrNewsState = {
  response: null,
  loading: false,
  error: null,
};

const mainNewsSlice = createSlice({
  name: 'nbrNewsSlice',
  initialState,
  reducers: {
    // getMainNewsData() {},
    setNbrNewsData(state, action: PayloadAction<NbrNewsState>) {
      const nbrNewsData = action.payload;
      return { ...state, ...nbrNewsData };
    },
  },
});

export const { setNbrNewsData } = mainNewsSlice.actions;

export default mainNewsSlice.reducer;
