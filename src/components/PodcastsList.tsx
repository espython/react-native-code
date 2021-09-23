import React from 'react';
import { ScrollView, Spinner } from 'native-base';

import PodcastListItem from './PodcastListItem';
import { useAppSelector } from '../redux/store';

const PodcastsList = () => {
  const data = useAppSelector(state => state.podcastScreenState.response);
  const img = data?.image;
  console.log('img img', img);
  return (
    <ScrollView>
      {data ? <PodcastListItem data={data?.items[0]} img={img} /> : <Spinner />}
      {data ? <PodcastListItem data={data?.items[0]} img={img} /> : <Spinner />}
      {data ? <PodcastListItem data={data?.items[0]} img={img} /> : <Spinner />}
    </ScrollView>
  );
};

export default PodcastsList;
