import { parse } from 'rss-to-json';

import { call, put } from 'redux-saga/effects';
import { setNbrNewsData } from './nprNewsSlice';
import { RssFeedResponse } from './types';
import { NBR_NEWS_RSS_FEED } from '../../Constants';

const getNbrNews = async (): Promise<RssFeedResponse> => {
  return parse(NBR_NEWS_RSS_FEED, {});
};

export function* nbrNewsSaga() {
  try {
    yield put(setNbrNewsData({ loading: true }));
    const response: RssFeedResponse = yield call(getNbrNews);
    yield put(setNbrNewsData({ loading: false, response }));
  } catch (error) {
    yield put(
      setNbrNewsData({
        error: { isError: true, value: error },
        loading: false,
      }),
    );
  }
}
