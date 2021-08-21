import { createSelector } from '@reduxjs/toolkit';
import { ScrollView, Box, Image, Heading, Text, Spinner } from 'native-base';
import React from 'react';
import { Dimensions, NativeScrollEvent } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { RssFeedItem } from '../redux/mainNews/types';
import { setActiveArticle } from '../redux/mainNews/mainNewsSlice';

export interface SimpleImagesCarouselCompState {
  active: number;
}
export interface OnScrollChangeProps {
  nativeEvent: NativeScrollEvent;
}
const articlesSelector = createSelector(
  state => state.mainNewsState.response?.items,
  (items: RssFeedItem[]) =>
    items?.filter(item => item.media.thumbnail !== undefined).slice(0, 4),
);

const { width } = Dimensions.get('window');
const height = (width * 65) / 100;

const SimpleImagesCarousel = () => {
  const items = useAppSelector(articlesSelector);
  const compState = useAppSelector(state => state.mainNewsState);
  const dispatch = useAppDispatch();
  console.log('Data', items);
  // const [state, setState] = useState<SimpleImagesCarouselCompState>({
  //   active: 0,
  // });

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
    <Box width={width} height={height}>
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
              <Box width={width} height={height} key={index}>
                <Image
                  source={{ uri: item.media.thumbnail?.url }}
                  alt={item.title}
                  key={index}
                  width={width}
                  height={height}
                  resizeMode="cover"
                />
                <Box
                  position="absolute"
                  top={0}
                  mt={4}
                  ml={6}
                  bg="gray.900"
                  py={1}
                  px={2}
                  borderRadius="md">
                  <Text color="white" textTransform="uppercase" fontSize={8}>
                    Featured
                  </Text>
                </Box>
                <Box position="absolute" bottom={16} pl={6} pb={2}>
                  <Box
                    bg="gray.500"
                    p={2}
                    bgColor="rgba(52, 52, 52, 0.4)"
                    borderRadius="lg">
                    <Heading
                      zIndex={10}
                      size="md"
                      fontFamily="Product Sans"
                      color="gray.200"
                      fontWeight="500"
                      letterSpacing={0.3}>
                      {item.title}
                    </Heading>
                    <Text
                      fontFamily="Product Sans"
                      color="gray.300"
                      fontWeight="400"
                      letterSpacing={0.3}>
                      5 minutes read
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </ScrollView>

          <Box
            position="absolute"
            flexDirection="row"
            bottom={0}
            // mb={3}
            justifyContent="center"
            alignSelf="center">
            {items?.map((item, index) => (
              <Box
                key={index}
                height={1}
                width={20}
                bgColor="gray.100"
                opacity={index === compState.active?.index ? 1 : 0.4}
                mx={1.5}
                my={2}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default SimpleImagesCarousel;
