import { createSelector } from '@reduxjs/toolkit';
import { ScrollView, Box, Spinner, Text } from 'native-base';
import React from 'react';
import { NativeScrollEvent } from 'react-native';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import { RssFeedItem } from '../redux/mainNews/types';
import { setActiveArticle } from '../redux/mainNews/mainNewsSlice';
import RectangleImageComp from './RectangleImageComp';
import { Colors } from '../Constants';

export interface ExploreCarouselCompState {
  active: number;
  categories: boolean;
}

export interface ExploreCarouselCompProps {
  title: string;
}
export interface OnScrollChangeProps {
  nativeEvent: NativeScrollEvent;
}
const articlesSelector = createSelector(
  (state: RootState) => state.abcNewsState.response?.items,
  (items: RssFeedItem[]) =>
    items?.filter(item => item.media.thumbnail !== undefined).slice(0, 4)
);

const ExploreCarousel = ({ title }: ExploreCarouselCompProps) => {
  const items = useAppSelector(articlesSelector);
  const compState = useAppSelector(state => state.abcNewsState);
  const dispatch = useAppDispatch();

  const onScrollChange = ({ nativeEvent }: OnScrollChangeProps) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== compState.active?.index) {
      // setState(prevState => ({ ...prevState, active: slide }));
      dispatch(
        setActiveArticle({ active: { index: slide, article: items[slide] } })
      );
    }
  };

  return (
    <Box mt={4} pl={6}>
      <Text
        color={Colors.heading}
        fontFamily="Quicksand"
        fontSize="md"
        fontWeight="bold"
        // px={2}
        textTransform="capitalize"
        mb={4}>
        explore {title}
      </Text>
      {compState.loading ? (
        <Spinner />
      ) : (
        <>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onScrollChange}
            scrollEventThrottle={16}>
            {items?.map((item, index) => (
              <RectangleImageComp key={item.title} item={item} />
            ))}
          </ScrollView>
        </>
      )}
    </Box>
  );
};

export default ExploreCarousel;
