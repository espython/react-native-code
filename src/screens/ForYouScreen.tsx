import { Box } from 'native-base';
import React from 'react';
import SecondaryCarousel from '../components/SecondaryCarousel';
import SimpleImagesCarousel from '../components/SimpleImagesCarousel';
import { MainNewsState } from '../redux/mainNews/types';
import { useAppSelector } from '../redux/store';

const ForYouScreen = () => {
  const mainNews: MainNewsState = useAppSelector(state => state.abcNewsState);
  console.log('Main news 000', mainNews);
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="flex-start">
      <SimpleImagesCarousel />
      <SecondaryCarousel />
    </Box>
  );
};

export default ForYouScreen;
