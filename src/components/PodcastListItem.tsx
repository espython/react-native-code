import { Box, Image, Text } from 'native-base';
import React from 'react';
import { Item } from '../redux/podcasts/types';
export interface PodcastListItemCompProps {
  data: Item;
  img: string | undefined;
}
const PodcastListItem = ({ data, img }: PodcastListItemCompProps) => {
  return (
    <Box flexDirection="row" px={3}>
      <Box px={4} py={4}>
        <Image
          size="sm"
          source={{
            uri: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80',
          }}
          alt="some text"
          borderRadius={12}
        />
      </Box>
      <Box
        flex={1}
        justifyContent="space-between"
        py={6}
        borderBottomWidth={1}
        borderBottomColor="gray.200">
        <Box>
          <Text fontFamily="Quicksand" color="gray.900" fontWeight="700">
            {data.title}
          </Text>
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <Text
            fontFamily="Quicksand"
            color="gray.500"
            fontSize={12}
            fontWeight="bold">
            {data.itunes_author}
          </Text>
          <Text fontFamily="Quicksand" color="gray.500" fontSize={12}>
            3:07
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PodcastListItem;
