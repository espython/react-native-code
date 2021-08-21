import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainNewsState } from './types';

const initialState: MainNewsState = {
  active: { index: 0, article: null },
  response: null,
  loading: false,
  error: null,
};

const mainNewsSlice = createSlice({
  name: 'mainNewsSlice',
  initialState,
  reducers: {
    // getMainNewsData() {},
    setMainNewsData: (state, action: PayloadAction<MainNewsState>) => {
      const mainNewsData = action.payload;
      return { ...state, ...mainNewsData };
    },
    setActiveArticle: (state, action: PayloadAction<MainNewsState>) => {
      const active = action.payload;
      return { ...state, ...active };
    },
  },
});

export const { setMainNewsData, setActiveArticle } = mainNewsSlice.actions;

export default mainNewsSlice.reducer;
