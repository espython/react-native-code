import React from 'react';
import { Box, Icon, Input, Text } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { headphone, journalist, night, search } from '../assets';
import TabBarIcon from './TabBarIcon';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setPodCastScreenData } from '../redux/podcasts/podcastSlice';
import { useNavigation } from '@react-navigation/core';

export interface TobParProps {
  style: StyleProp<ViewStyle>;
  title?: string;
}

const TopBar = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const showPodcastScreen = useAppSelector(
    state => state.podcastScreenState.showPodcastScreen
  );
  return (
    <Box
      backgroundColor="white"
      flexDirection="row"
      style={styles.container}
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
      <TouchableOpacity
        onPress={() =>
          dispatch(
            setPodCastScreenData({ showPodcastScreen: !showPodcastScreen })
          )
        }>
        <TabBarIcon source={headphone} size={15} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={
          () => navigation.navigate('Settings')
          // auth()
          //   .signOut()
          //   .then(() => console.log('User signed out!'))
        }>
        <TabBarIcon source={journalist} size={15} />
      </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});

export default TopBar;
