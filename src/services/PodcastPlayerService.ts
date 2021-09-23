/**
 * setup the podcast player
 */
import TrackPlayer, { State } from 'react-native-track-player';

export interface Track {
  id: number;
  url: string; // Load media from the network
  title: string;
  artist: string;
  album?: string;
  genre?: string;
  date: string; // RFC 3339
  artwork?: string; // Load artwork from the network
  duration: number; // Duration in seconds
}

export class PodcastPlayerService {
  private tracks: Track[];
  private playbackState;
  private tracksLength: number;

  constructor(tracks: Track[], tracksLength: number, playbackState?: State) {
    this.tracks = tracks;
    this.playbackState = playbackState;
    this.tracksLength = tracksLength;
    console.log('tracks ccc', this.tracks);
  }
  async setupPlayer() {
    await TrackPlayer.setupPlayer({ waitForBuffer: true });

    await TrackPlayer.add(this.tracks);
  }

  async togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    console.log('current track', currentTrack);
    if (currentTrack !== null) {
      console.log('track is playing', this.playbackState);
      if (
        this.playbackState === State.Paused ||
        this.playbackState === State.Ready
      ) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
        console.log('track is paused');
      }
    }
  }

  async getBufferPosition() {
    const bufferedPosition = await TrackPlayer.getBufferedPosition();
    console.log('buffer pos', bufferedPosition);
    return bufferedPosition;
  }

  async getTrack() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack) {
      const track = await TrackPlayer.getTrack(currentTrack);
      return track;
    }
  }

  async skipForwardTo() {
    await TrackPlayer.skipToNext();
  }

  async skipBackwardTo() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    // await TrackPlayer.clearNowPlayingMetadata();
    if (currentTrack === 0) {
      await TrackPlayer.skip(this.tracksLength - 1);
    } else {
      await TrackPlayer.skipToPrevious();
    }
  }

  async resetPlayList() {
    await TrackPlayer.reset();
    await TrackPlayer.add(this.tracks);
  }
}
