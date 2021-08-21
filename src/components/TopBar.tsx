import React from 'react';
import {Box, HStack, Icon, Input, Text} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StyleProp, ViewStyle} from 'react-native';
import {headphone, journalist, night, search} from '../assets';
import TabBarIcon from './TabBarIcon';

export interface TobParProps {
  style: StyleProp<ViewStyle>;
  title: string;
}

const TopBar = ({style}: TobParProps) => {
  return (
    <HStack
      backgroundColor="white"
      style={style}
      shadow={1}
      px={2}
      justifyContent="space-around"
      alignItems="center">
      <Box flexDirection="row">
        <TabBarIcon source={night} size={15} />
        <Text fontSize={12} color="blue.600">
          23
        </Text>
        <Icon
          as={<FontAwesome5 name="circle" />}
          size={1}
          mt={1}
          ml={0.5}
          color="blue.600"
        />
      </Box>
      <Input
        variant="filled"
        borderRadius={24}
        InputLeftElement={
          <Box pl={3}>
            <TabBarIcon source={search} size={10} />
          </Box>
        }
        size="md"
        minWidth={40}
        placeholder="Search"
        _light={{
          placeholderTextColor: 'blueGray.400',
        }}
        _dark={{
          placeholderTextColor: 'blueGray.50',
        }}
      />
      <TabBarIcon source={headphone} size={15} />
      <TabBarIcon source={journalist} size={15} />
    </HStack>
  );
};

export default TopBar;
