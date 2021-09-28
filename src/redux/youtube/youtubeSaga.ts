import { call, put } from '@redux-saga/core/effects';
import axios from 'axios';
import { setVideoListData } from './youtubeSlice';
import { Video } from './youtubeTypes';

const getData = async (): Promise<Video[]> => {
  const res = await axios.get('http://localhost:5000/api/videos');
  return res.data;
};

export function* youtubeVideosSaga() {
  try {
    yield put(setVideoListData({ loading: true }));
    const videosList: Video[] = yield call(getData);
    yield put(setVideoListData({ loading: false, VideosList: videosList }));
  } catch (error) {
    console.log('Error youtube ', error);
    yield put(
      setVideoListData({
        error: error.message,
        loading: false,
      })
    );
  }
}
