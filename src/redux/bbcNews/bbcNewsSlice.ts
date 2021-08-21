import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BBCNewsState } from './types';

const initialState: BBCNewsState = {
  response: null,
  loading: false,
  error: null,
};

const bbcNewsSlice = createSlice({
  name: 'bbcNewsSlice',
  initialState,
  reducers: {
    // getMainNewsData() {},
    setBBCNewsData(state, action: PayloadAction<BBCNewsState>) {
      const nbrNewsData = action.payload;
      return { ...state, ...nbrNewsData };
    },
  },
});

export const { setBBCNewsData } = bbcNewsSlice.actions;

export default bbcNewsSlice.reducer;
