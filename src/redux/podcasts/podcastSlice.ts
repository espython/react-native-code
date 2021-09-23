import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PodcastScreenState } from './types';

const initialState: PodcastScreenState = {
  showPodcastScreen: false,
  response: null,
  loading: false,
  error: null,
};

const podcastsSlice = createSlice({
  name: 'podcastsSlice',
  initialState,
  reducers: {
    // getMainNewsData() {},
    setPodCastScreenData(state, action: PayloadAction<PodcastScreenState>) {
      const podCastData = action.payload;
      return { ...state, ...podCastData };
    },
    setShowPodcastScreen(state, action: PayloadAction<PodcastScreenState>) {
      const podCastData = action.payload;
      return { ...state, ...podCastData };
    },
  },
});

export const { setPodCastScreenData } = podcastsSlice.actions;

export default podcastsSlice.reducer;
