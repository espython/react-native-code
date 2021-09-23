import { Text } from 'native-base';
import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PodcastsList from './PodcastsList';

const FirstRoute = () => <PodcastsList />;
const Politics = () => <PodcastsList />;
const MyPlaylistRoute = () => <PodcastsList />;
const FinanceRoute = () => <PodcastsList />;

const renderScene = SceneMap({
  foryou: FirstRoute,
  myplaylist: MyPlaylistRoute,
  finance: FinanceRoute,
  politics: Politics,
});

const renderTabBar = props => {
  console.log('Props', props);
  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={{ backgroundColor: 'white' }}
      labelStyle={{ color: 'black' }}
      renderLabel={renderLabel}
    />
  );
};

const renderLabel = ({ route, focused, color }) => {
  console.log('colors', color);
  console.log('focused', focused);
  console.log('Route', route);
  return (
    <Text
      style={{
        color,
        opacity: focused ? 1 : 0.5,
        margin: 8,
        fontSize: 10,
        fontWeight: '700',
        fontFamily: 'Quicksand',
      }}>
      {route.title}
    </Text>
  );
};

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'foryou', title: 'For you' },
    { key: 'myplaylist', title: 'My playlist' },
    { key: 'finance', title: 'Finance' },
    { key: 'politics', title: 'Politics' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
