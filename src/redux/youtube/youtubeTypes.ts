export interface VideoListState {
  loading: boolean;
  error?: string;
  VideosList?: Video[];
}
export interface Video {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: [];
    channelTitle: string;
    tags: [];
    categoryId: string;
    liveBroadcastContent: string;
    localized: [Object];
    defaultAudioLanguage: string;
  };
}
