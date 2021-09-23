import { Box, Slide, Image, ZStack, Text } from 'native-base';
import Slider from '@react-native-community/slider';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import { createSelector } from 'reselect';
import PodcastPlayer from '../components/PodcastPlayer';
import PodcastsTabView from '../components/PodcastsTabView';
import PodcastTopBar from '../components/PodcastTopBar';
import { RootState, useAppSelector } from '../redux/store';
import { PodcastPlayerService, Track } from '../services/PodcastPlayerService';
import { Colors } from '../Constants';
import { set } from 'date-fns/esm';

export interface PodcastScreenProps {
  isOpen?: boolean;
}

const tracksSelector = createSelector(
  (state: RootState) => state.podcastScreenState.response?.items,
  items =>
    items?.map((item, i) => {
      const track: Track = {
        id: i,
        title: item.title,
        url: item.media.thumbnail.url,
        date: item.published,
        artist: item.itunes_author,
        duration: parseInt(item.media.thumbnail.duration, 10),
      };
      return track;
    })
);
const PodcastScreen = ({ isOpen }: PodcastScreenProps) => {
  const screen = Dimensions.get('screen');
  const screenHeight = screen.height;
  const tracks = useAppSelector(tracksSelector) as Track[];
  const podcastImage = useAppSelector(
    state => state.podcastScreenState.response?.image
  );
  const progress = useProgress();
  const playbackState = usePlaybackState();
  // const [podcastPlayerService, setPodcastPlayerService] =
  //   useState<PodcastPlayerService | null>(null);

  const [track, setTrack] = useState<Track | null>(null);
  const podcastPlayerService =
    tracks &&
    tracks.length &&
    new PodcastPlayerService(tracks, tracks?.length, playbackState);

  useEffect(() => {
    podcastPlayerService?.setupPlayer();
  }, [tracks]);
  useEffect(() => {
    async function getTrack() {
      if (podcastPlayerService) {
        const currentTrack = await podcastPlayerService.getTrack();
        setTrack(currentTrack as Track);
      }
    }
    getTrack();
  }, [playbackState]);

  return (
    <Slide in={isOpen} placement="top">
      <Box
        height={screenHeight}
        _text={{
          color: 'white',
        }}
        bg="gray.50"
        rounded="md">
        <ZStack flex={1.4}>
          <Image
            source={{
              uri: podcastImage && podcastImage,
            }}
            alt="podcast image"
            width="100%"
            height="100%"
          />
          <PodcastTopBar />
          <Box position="absolute" bottom={0} left={0} width="100%" px={4}>
            <Slider
              style={{ width: '100%', height: 40 }}
              value={progress.position}
              minimumValue={0}
              maximumValue={progress.duration}
              accessibilityLabel="hello world"
              step={1}
              onSlidingComplete={async value => {
                await TrackPlayer.seekTo(value);
              }}
              minimumTrackTintColor={Colors.textDark}
              thumbTintColor={Colors.textDark}
              maximumTrackTintColor={Colors.mainLight}
            />
            <Box flexDirection="row" justifyContent="space-between" pb={2}>
              <Text color="gray.200">
                {new Date(progress.position * 1000).toISOString().substr(14, 5)}
              </Text>
              <Text color="gray.200">
                {new Date((progress.duration - progress.position) * 1000)
                  .toISOString()
                  .substr(14, 5)}
              </Text>
            </Box>
            <Box flexDirection="row" alignItems="center" px={0} pb={2}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1598518142101-11ab82b871a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80',
                }}
                alt="some image"
                size="md"
                borderRadius={12}
              />
              <Box flex={1} py={2} px={2}>
                <Text color="white">{track?.title}</Text>
                <Text color="white" mt={2}>
                  {track?.artist}
                </Text>
              </Box>
            </Box>
          </Box>
        </ZStack>
        <Box flex={1}>
          <PodcastsTabView />
          {/* <PodcastTabs3 /> */}
        </Box>
        <Box px={1}>
          {podcastPlayerService && (
            <PodcastPlayer
              tracks={tracks}
              podcastPlayerService={
                podcastPlayerService && podcastPlayerService
              }
              playbackState={playbackState}
            />
          )}
        </Box>
      </Box>
    </Slide>
  );
};

export default PodcastScreen;
