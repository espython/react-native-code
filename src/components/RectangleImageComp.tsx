import { Box, Image, Text, ZStack } from 'native-base';
import faker from 'faker';
import React from 'react';
import { RssFeedItem } from '../redux/mainNews/types';
import { Colors } from '../Constants';

export interface RectangleImageCompProps {
  item: RssFeedItem;
}

const RectangleImageComp = ({ item }: RectangleImageCompProps) => {
  return (
    <ZStack
      // alignItems="center"
      // justifyContent="center"
      width={107}
      // py={4}
      key={item.title}
      mr={4}
      height={180}>
      <Image
        source={{ uri: item.media.thumbnail[0]?.url }}
        width="100%"
        height="100%"
        resizeMode="cover"
        alt="some thing"
        borderRadius={12}
      />

      <Box
        bg="gray.700"
        opacity={0.5}
        width="100%"
        height="100%"
        borderRadius={12}
      />
      <Box
        width="100%"
        position="absolute"
        bottom={0}
        // alignItems="center"
        px={1}
        pb={2}>
        <Text
          color={Colors.mainLight}
          fontFamily="Quicksand"
          fontSize={12}
          textAlign="center"
          fontWeight="bold">
          {faker.name.firstName()} {faker.name.lastName()}
        </Text>
        <Text
          color={Colors.secondaryTextLight}
          fontFamily="Quicksand"
          fontSize={8}
          textAlign="center"
          fontWeight="bold">
          {faker.name.jobTitle()}
        </Text>
      </Box>

      {/* <Text alignSelf="flex-start" pl={4}>
      hello
    </Text> */}
    </ZStack>
  );
};

export default RectangleImageComp;
