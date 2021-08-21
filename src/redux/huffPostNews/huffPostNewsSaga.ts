import { parse } from 'rss-to-json';

import { call, put } from 'redux-saga/effects';
import { setHuffPostNewsData } from './huffPostNewsSlice';
import { RssFeedResponse } from './types';

const getData = async (): Promise<RssFeedResponse> => {
  return parse('https://www.huffpost.com/section/front-page/feed?x=1', {});
};

export function* huffPostNewsSaga() {
  try {
    yield put(setHuffPostNewsData({ loading: true }));
    const response: RssFeedResponse = yield call(getData);
    console.log('huffPost response 888 ', response);
    yield put(setHuffPostNewsData({ loading: false, response }));
  } catch (error) {
    console.log('Error 777', error);
    yield put(
      setHuffPostNewsData({
        error: { isError: true, value: error },
        loading: false,
      }),
    );
  }
}
