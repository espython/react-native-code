import React from 'react';
import { Box, Icon } from 'native-base';
import { State } from 'react-native-track-player';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { PodcastPlayerService, Track } from '../services/PodcastPlayerService';
import { TouchableOpacity } from 'react-native';
export interface PodcastPlayerCompProps {
  tracks: Track[];
  podcastPlayerService: PodcastPlayerService | null;
  playbackState: State;
}
const PodcastPlayer = ({
  podcastPlayerService,
  playbackState,
}: PodcastPlayerCompProps) => {
  return (
    <Box
      shadow={3}
      px={5}
      borderTopWidth={2}
      borderTopColor="gray.300"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <TouchableOpacity
        onPress={() =>
          podcastPlayerService && podcastPlayerService?.resetPlayList()
        }>
        <Icon as={<AntDesign name="reload1" />} size="sm" color="gray.500" />
      </TouchableOpacity>
      <Box alignItems="center" py={6} flexDirection="row">
        <TouchableOpacity
          onPress={() => podcastPlayerService?.skipBackwardTo()}>
          <Icon
            as={<FontAwesome5 name="backward" />}
            size="sm"
            color="gray.400"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => podcastPlayerService?.togglePlayback()}>
          <Icon
            as={
              playbackState === State.Playing ? (
                <FontAwesome name="pause-circle" />
              ) : (
                <FontAwesome name="play-circle" />
              )
            }
            size="2xl"
            color="#2962FF"
            mx={8}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => podcastPlayerService?.skipForwardTo()}>
          <Icon
            as={<FontAwesome5 name="forward" />}
            size="sm"
            color="gray.400"
          />
        </TouchableOpacity>
      </Box>
      <Icon as={<FontAwesome5 name="random" />} size="sm" color="gray.400" />
    </Box>
  );
};

export default PodcastPlayer;
