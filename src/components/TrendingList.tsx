import { Box, Image, Text, VStack } from 'native-base';
import React from 'react';
import { rising } from '../assets';
import { RssFeedItem } from '../redux/bbcNews/types';

export interface TrendingListCompProps {
  trendingHead: string;
  news: any[] | RssFeedItem[] | undefined;
}

export interface TrendingListItemCompProps {
  img: string;
  category: string;
  title: string;
}
const TrendingListComp = ({ trendingHead, news }: TrendingListCompProps) => {
  return (
    <Box py={8}>
      <Box flexDirection="row" alignItems="center" px={6}>
        <Image source={rising} alt="Alternate Text" size="xs" />
        <Text
          color="#A6A4B4"
          fontFamily="Quicksand"
          pl={11}
          fontWeight="700"
          fontSize={18}>
          {trendingHead}
        </Text>
      </Box>
      <VStack px={6} space={5} py={8}>
        {news?.slice(0, 4).map(item => (
          <TrendingListItemComp
            img={item.media.thumbnail[5].url}
            key={item.title}
            category={item.category}
            title={item.title}
          />
        ))}
      </VStack>
    </Box>
  );
};

export const TrendingListItemComp = ({
  img,
  category,
  title,
}: TrendingListItemCompProps) => {
  return (
    <Box
      bg="white"
      shadow={3}
      borderRadius={12}
      px={5}
      flexDirection="row"
      justifyContent="space-between"
      py={2}>
      <Box maxWidth="65%" alignItems="flex-start" py={2}>
        <Text
          fontFamily="Quicksand"
          fontWeight="bold"
          color="#2962FF"
          fontSize={16}
          mb={1}>
          {category}
        </Text>
        <Text fontFamily="Quicksand" fontWeight="bold" fontSize="sm">
          {title.slice(1)}
        </Text>

        <Text mt={1} fontFamily="Quicksand" fontSize="xs">
          3 min read
        </Text>
      </Box>
      <Box justifyContent="center">
        <Box shadow={7}>
          <Image
            source={{ uri: img }}
            alt="Alternate Text"
            size="md"
            rounded="xl"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingListComp;
