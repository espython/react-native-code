import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import mainNewsState from './mainNews/mainNewsSlice';
import abcNewsState from './abcNews/abcNewsSlice';
import huffPostNewsState from './huffPostNews/huffPostNewsSlice';
import nbrNewsState from './nprNews/nprNewsSlice';
import bbcNewsState from './bbcNews/bbcNewsSlice';
import podcastScreenState from './podcasts/podcastSlice';
import userState from './user/userSlice';
import youtubeSlice from './youtube/youtubeSlice';
import rootSaga from './rootSagas';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  mainNewsState,
  abcNewsState,
  huffPostNewsState,
  nbrNewsState,
  bbcNewsState,
  podcastScreenState,
  userState,
  youtubeSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([logger, sagaMiddleware]),
  devTools: true,
});
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof rootReducer>;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
