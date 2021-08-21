import { parse } from 'rss-to-json';

import { call, put } from 'redux-saga/effects';
import { setAbcNewsData } from './abcNewsSlice';
import { RssFeedResponse } from './types';
import { ABC_NEWS_RSS_FEED } from '../../Constants';

const getData = async (): Promise<RssFeedResponse> => {
  return parse(ABC_NEWS_RSS_FEED, {});
};

export function* abcNewsSaga() {
  try {
    yield put(setAbcNewsData({ loading: true }));
    const response: RssFeedResponse = yield call(getData);
    console.log('abc news 999', response);
    yield put(setAbcNewsData({ loading: false, response }));
  } catch (error) {
    yield put(
      setAbcNewsData({
        error: { isError: true, value: error },
        loading: false,
      }),
    );
  }
}
