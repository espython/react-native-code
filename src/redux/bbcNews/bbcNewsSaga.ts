import { parse } from 'rss-to-json';

import { call, put } from 'redux-saga/effects';
import { setBBCNewsData } from './bbcNewsSlice';
import { RssFeedResponse } from './types';
import { BBCI_NEWS_RSS_FEED } from '../../Constants';

const getNbrNews = async (): Promise<RssFeedResponse> => {
  return parse(BBCI_NEWS_RSS_FEED, {});
};

export function* bbcNewsSaga() {
  try {
    yield put(setBBCNewsData({ loading: true }));
    const response: RssFeedResponse = yield call(getNbrNews);
    yield put(setBBCNewsData({ loading: false, response }));
  } catch (error) {
    console.log('Error');
    yield put(
      setBBCNewsData({
        error: {
          isError: true,
          value: { name: error.name, message: error.message },
        },
        loading: false,
      }),
    );
  }
}
