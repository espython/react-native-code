export interface RSSFeedItemCategory {
  $text: string;
  domain: string;
}
export interface RSSFeedEnclosure {
  height: string;
  width: string;
  credit: string;
  url: string;
}
export interface RssFeedItem {
  title: string;
  description: string;
  link: string;
  author: string;
  published: number;
  created: number;
  category: string;
  enclosures: [RSSFeedEnclosure];
  media: { thumbnail: [RSSFeedEnclosure] };
}
export interface RssFeedResponse {
  title: string;
  category: [];
  description: string;
  link: string;
  image: string;
  items: RssFeedItem[] | any[];
}

export interface AbcNewsState {
  response?: RssFeedResponse | null | undefined;
  loading?: boolean;
  error?: { isError: boolean; value: Error } | null | undefined;
}
