import { Box, ScrollView } from 'native-base';
import React from 'react';
import CategoriesCarousel from '../components/CategoriesComp';
import ExploreCarousel from '../components/ExploreCarosel';
import TopBar from '../components/TopBar';
import TrendingListComp from '../components/TrendingList';
import { Colors } from '../Constants';
import { useAppSelector } from '../redux/store';

const TopNewsScreen = () => {
  const abcNews = useAppSelector(state => state.abcNewsState);
  return (
    <Box flex={1}>
      <TopBar />
      <ScrollView bg={Colors.mainLight}>
        <CategoriesCarousel />
        <ExploreCarousel title="writers" />
        <ExploreCarousel title="shows" />
        <TrendingListComp
          trendingHead="Trending in India"
          news={abcNews.response?.items}
        />
      </ScrollView>
    </Box>
  );
};

export default TopNewsScreen;
