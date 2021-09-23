import { parse } from 'rss-to-json';
import { call, put } from 'redux-saga/effects';

import { Root } from './types';
import { PODCASTS_URL } from '../../Constants';
import { setPodCastScreenData } from './podcastSlice';

const getData = async (): Promise<Root> => {
  return parse(PODCASTS_URL, {});
};

export function* podcastsSaga() {
  try {
    yield put(setPodCastScreenData({ loading: true }));
    const response: Root = yield call(getData);
    yield put(setPodCastScreenData({ loading: false, response }));
  } catch (error) {
    yield put(
      setPodCastScreenData({
        error: { isError: true, value: error },
        loading: false,
      })
    );
  }
}
