import { Box, ScrollView } from 'native-base';
import React from 'react';
import SecondaryCarousel from '../components/SecondaryCarousel';
import SimpleImagesCarousel from '../components/SimpleImagesCarousel';
import TopBar from '../components/TopBar';
import TrendingListComp from '../components/TrendingList';
import { AbcNewsState } from '../redux/abcNews/types';
import { MainNewsState } from '../redux/mainNews/types';
import { useAppSelector } from '../redux/store';

const ForYouScreen = () => {
  const mainNews: MainNewsState = useAppSelector(state => state.abcNewsState);
  const abcNews: AbcNewsState = useAppSelector(state => state.abcNewsState);
  console.log('Main news 000', mainNews);
  return (
    <Box flex={1}>
      <TopBar />
      <ScrollView flex={1} bg="#fff" showsVerticalScrollIndicator={false}>
        <SimpleImagesCarousel />
        <SecondaryCarousel />
        <TrendingListComp
          trendingHead="Trending Now"
          news={abcNews.response?.items}
        />
      </ScrollView>
    </Box>
  );
};

export default ForYouScreen;
