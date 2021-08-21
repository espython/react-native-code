import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HuffPostNewsState } from './types';

const initialState: HuffPostNewsState = {
  response: null,
  loading: false,
  error: null,
};

const huffPostNewsSlice = createSlice({
  name: 'huffPostNewsSlice',
  initialState,
  reducers: {
    // getMainNewsData() {},
    setHuffPostNewsData(state, action: PayloadAction<HuffPostNewsState>) {
      const huffPostNewsData = action.payload;
      return { ...state, ...huffPostNewsData };
    },
  },
});

export const { setHuffPostNewsData } = huffPostNewsSlice.actions;

export default huffPostNewsSlice.reducer;
