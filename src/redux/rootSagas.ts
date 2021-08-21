import { all } from 'redux-saga/effects';
import { abcNewsSaga } from './abcNews/abcNewsSaga';
import { bbcNewsSaga } from './bbcNews/bbcNewsSaga';
import { huffPostNewsSaga } from './huffPostNews/huffPostNewsSaga';
import { mainNewsSaga } from './mainNews/mainNewsSaga';
import { nbrNewsSaga } from './nprNews/nprNewsSaga';

export default function* rootSaga() {
  yield all([
    mainNewsSaga(),
    abcNewsSaga(),
    huffPostNewsSaga(),
    nbrNewsSaga(),
    bbcNewsSaga(),
  ]);
}
