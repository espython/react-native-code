import { Box, ScrollView, Text } from 'native-base';
import React from 'react';
import NewsInPhotos from '../components/NewsInPhotos';
import SimpleImagesCarousel from '../components/SimpleImagesCarousel';
import TopBar from '../components/TopBar';
import { MainNewsState } from '../redux/mainNews/types';
import { useAppSelector } from '../redux/store';

const TrendingNewsScreen = () => {
  const mainNews: MainNewsState = useAppSelector(state => state.abcNewsState);
  return (
    <ScrollView flex={1} bg="#fff" showsVerticalScrollIndicator={false}>
      <TopBar />
      {mainNews.response?.items && (
        <NewsInPhotos items={mainNews.response?.items.slice(0, 12)} />
      )}
      <Box py={6}>
        <Text pb={4} px={3} fontFamily="Quicksand" fontWeight="bold">
          Featured articles
        </Text>
        <SimpleImagesCarousel />
      </Box>
    </ScrollView>
  );
};

export default TrendingNewsScreen;
