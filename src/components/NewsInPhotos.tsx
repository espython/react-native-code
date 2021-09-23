import { Box, Image, Text } from 'native-base';
import React from 'react';
import { RssFeedItem } from '../redux/mainNews/types';
import { chunkArray } from '../utils/helpers';

export interface NewsInPhotosCompProps {
  items: RssFeedItem[];
}

export interface PhotosCompProps {
  items: RssFeedItem[];
  height: number;
  flexDirection: string;
}
export const PhotosComp = ({
  items,
  flexDirection,
  height,
}: PhotosCompProps) => (
  <Box flexDirection={flexDirection as string}>
    <Image
      source={{ uri: items && items[0].media.thumbnail[0].url }}
      alt={items[0].title}
      flex={1}
      // height={height}
      // width={width}
    />
    {items.length > 1 && (
      <Box>
        <Image
          source={{ uri: items[1].media.thumbnail[0].url }}
          alt={items[0].title}
          size={'xl'}
          // height={height}
          // width={width}
        />
        {items.length > 2 && (
          <Image
            source={{ uri: items[2].media.thumbnail[0].url }}
            alt={items[0].title}
            size={'xl'}
            // height={height}
            // width={width}
          />
        )}
      </Box>
    )}
  </Box>
);

const NewsInPhotos = ({ items }: NewsInPhotosCompProps) => {
  const chunckedItems = chunkArray(items, 3);
  console.log('chuncked Array', chunckedItems);
  return (
    <Box>
      <Text pt={4} pb={3} px={3} fontFamily="Quicksand" fontWeight="bold">
        News In Photos
      </Text>
      <Box>
        {chunckedItems.map((chunck, index) => (
          <PhotosComp
            items={chunck}
            key={index}
            flexDirection={index % 2 === 0 ? 'row-reverse' : 'row'}
            height={index % 2 === 0 ? 262 : 360}
          />
        ))}
      </Box>
    </Box>
  );
};

export default NewsInPhotos;
