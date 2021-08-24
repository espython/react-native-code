import { ScrollView } from 'native-base';
import React from 'react';
import CategoriesCarousel from '../components/CategoriesComp';
import ExploreCarousel from '../components/ExploreCarosel';
import TrendingListComp from '../components/TrendingList';
import { Colors } from '../Constants';
import { useAppSelector } from '../redux/store';

const TopNewsScreen = () => {
  const abcNews = useAppSelector(state => state.abcNewsState);
  return (
    <ScrollView bg={Colors.mainLight}>
      <CategoriesCarousel />
      <ExploreCarousel title="writers" />
      <ExploreCarousel title="shows" />
      <TrendingListComp
        trendingHead="Trending in India"
        news={abcNews.response?.items}
      />
    </ScrollView>
  );
};

export default TopNewsScreen;
