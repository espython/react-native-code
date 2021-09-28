import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VideoListState } from './youtubeTypes';

const initialState: VideoListState = {
  VideosList: undefined,
  loading: false,
  error: undefined,
};

const youtubeSlice = createSlice({
  name: 'youtubeVideosSlice',
  initialState,
  reducers: {
    // getMainNewsData() {},
    setVideoListData(state, action: PayloadAction<VideoListState>) {
      const podCastData = action.payload;
      return { ...state, ...podCastData };
    },
  },
});

export const { setVideoListData } = youtubeSlice.actions;

export default youtubeSlice.reducer;
