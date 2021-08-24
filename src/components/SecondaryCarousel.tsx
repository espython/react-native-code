import { createSelector } from '@reduxjs/toolkit';
import { ScrollView, Box, Text, Spinner } from 'native-base';
import React from 'react';
import { ImageBackground, NativeScrollEvent, StyleSheet } from 'react-native';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import { RssFeedItem } from '../redux/mainNews/types';
import { setActiveArticle } from '../redux/mainNews/mainNewsSlice';

export interface SecondaryImageCarouselCompState {
  active: number;
  categories: boolean;
}

export interface SecondaryImageCarouselCompProps {
  categories: boolean;
}
export interface OnScrollChangeProps {
  nativeEvent: NativeScrollEvent;
}
const articlesSelector = createSelector(
  (state: RootState) => state.abcNewsState.response?.items,
  (items: RssFeedItem[]) =>
    items?.filter(item => item.media.thumbnail !== undefined).slice(0, 4),
);

const SecondaryImageCarousel = ({
  categories,
}: SecondaryImageCarouselCompProps) => {
  const items = useAppSelector(articlesSelector);
  const compState = useAppSelector(state => state.abcNewsState);
  const dispatch = useAppDispatch();

  const onScrollChange = ({ nativeEvent }: OnScrollChangeProps) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== compState.active?.index) {
      // setState(prevState => ({ ...prevState, active: slide }));
      dispatch(
        setActiveArticle({ active: { index: slide, article: items[slide] } }),
      );
    }
  };

  return (
    <Box height={211} mt={4}>
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
              <Box
                width={index === 0 ? 234 : 107}
                height={211}
                py={4}
                key={index}
                justifyContent="center"
                shadow={9}
                borderRadius={8}
                mx={2}>
                <ImageBackground
                  source={{ uri: item.media.thumbnail[0]?.url }}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                  borderRadius={8}>
                  <Text alignSelf="flex-start" pl={4}>
                    hello
                  </Text>
                </ImageBackground>
              </Box>
            ))}
          </ScrollView>
        </>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,

    elevation: 9,
  },
});

export default SecondaryImageCarousel;
