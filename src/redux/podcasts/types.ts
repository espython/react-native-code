export interface PodcastScreenState {
  showPodcastScreen?: boolean;
  response?: Root | null | undefined;
  loading?: boolean;
  error?: { isError: boolean; value: Error } | null | undefined;
}

export interface Root {
  status: string;
  feed: Feed;
  items: Item[];
}

export interface Feed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

export interface Item {
  title: string;
  published: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Enclosure;
  categories: any[];
  itunes_author: string;
  media: {
    thumbnail: {
      duration: string;
      expression: string;
      fileSize: string;
      medium: string;
      type: string;
      url: string;
    };
  };
}

export interface Enclosure {
  link: string;
  type: string;
  length: number;
  duration: string;
  rating: Rating;
}

export interface Rating {
  scheme: string;
  value: string;
}
