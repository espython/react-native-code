import { createSelector } from '@reduxjs/toolkit';
import { Box, Text, Spinner, Image } from 'native-base';
import React from 'react';
import { NativeScrollEvent } from 'react-native';
import { RootState, useAppSelector } from '../redux/store';
import { RssFeedItem } from '../redux/mainNews/types';
import { Colors } from '../Constants';

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
    items?.filter(item => item.media.thumbnail !== undefined).slice(0, 8)
);

const CategoriesCarousel = ({}: SecondaryImageCarouselCompProps) => {
  const items = useAppSelector(articlesSelector);
  const compState = useAppSelector(state => state.abcNewsState);

  return (
    <Box mt={5} px={4}>
      {compState.loading ? (
        <Spinner />
      ) : (
        <Box>
          <Text
            color={Colors.heading}
            fontFamily="Quicksand"
            fontSize="md"
            fontWeight="bold"
            px={2}
            textTransform="capitalize"
            mb={3}>
            Explore categories
          </Text>

          <Box
            flexDirection="row"
            justifyContent="space-between"
            flexWrap="wrap">
            {items?.map(item => (
              <Box
                key={item.title}
                py={4}
                px={2}
                justifyContent="center"
                maxWidth={96}
                alignItems="center">
                <Box shadow={7}>
                  <Image
                    source={{ uri: item.media.thumbnail[0].url }}
                    alt="hello"
                    width={65}
                    height={65}
                    borderRadius={65}
                  />
                </Box>

                <Text pt={3} color={Colors.textDark} fontSize="sm">
                  {item.category}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CategoriesCarousel;
