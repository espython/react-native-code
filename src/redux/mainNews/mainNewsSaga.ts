import { parse } from 'rss-to-json';

import { call, put } from 'redux-saga/effects';
import { setMainNewsData } from './mainNewsSlice';
import { RssFeedResponse } from './types';
import { NY_TIMES_RSS_FEED } from '../../Constants';

const getMainNews = async (): Promise<RssFeedResponse> => {
  return parse(NY_TIMES_RSS_FEED, {});
};

export function* mainNewsSaga() {
  try {
    yield put(setMainNewsData({ loading: true }));
    const response: RssFeedResponse = yield call(getMainNews);
    console.log('items 999', response);
    yield put(setMainNewsData({ loading: false, response }));
  } catch (error) {
    yield put(
      setMainNewsData({
        error: { isError: true, value: error },
        loading: false,
      }),
    );
  }
}
