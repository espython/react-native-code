import { Box, Icon, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setPodCastScreenData } from '../redux/podcasts/podcastSlice';

const PodcastTopBar = () => {
  const dispatch = useAppDispatch();
  const showPodcastScreen = useAppSelector(
    state => state.podcastScreenState.showPodcastScreen
  );
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      px={4}
      py={4}
      mt={8}>
      <TouchableOpacity
        onPress={() =>
          dispatch(
            setPodCastScreenData({
              showPodcastScreen: !showPodcastScreen,
            })
          )
        }>
        <Icon color="white" as={<FontAwesomeIcon name="arrow-left" />} />
      </TouchableOpacity>
      <Text
        color="white"
        fontSize="2xl"
        fontWeight="bold"
        fontFamily="Quicksand">
        Podcast
      </Text>
      <TouchableOpacity>
        <Icon color="white" as={<FontAwesomeIcon name="search" />} />
      </TouchableOpacity>
    </Box>
  );
};

export default PodcastTopBar;
