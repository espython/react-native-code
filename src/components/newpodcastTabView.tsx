import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Tab, TabView, Text } from 'react-native-elements';
import { useAppSelector } from '../redux/store';

const NewPodcastTabView = () => {
  const [index, setIndex] = useState(0);
  const data = useAppSelector(state => state.podcastScreenState.response);
  const img = data?.image;
  console.log('img img', img);
  return (
    <>
      <Tab
        value={index}
        onChange={setIndex}
        indicatorStyle={styles.indicatorStyle}>
        <Tab.Item
          title="For You"
          titleStyle={{ fontSize: 10 }}
          containerStyle={styles.tabContainer}
          buttonStyle={styles.btn}
        />
        <Tab.Item
          title="My playlist"
          titleStyle={{ fontSize: 10 }}
          containerStyle={styles.tabContainer}
          buttonStyle={styles.btn}
        />
        <Tab.Item
          title="politics "
          titleStyle={{ fontSize: 10 }}
          containerStyle={styles.tabContainer}
          buttonStyle={styles.btn}
        />
        <Tab.Item
          title="mumbai"
          titleStyle={{ fontSize: 10 }}
          containerStyle={styles.tabContainer}
          buttonStyle={styles.btn}
        />
        {/* <Tab.Item
          title="finance"
          titleStyle={{ fontSize: 10 }}
          containerStyle={styles.tabContainer}
          buttonStyle={styles.btn}
        /> */}
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="timing">
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Text h1>Cart</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Text h1>Cart</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#FFF',
    padding: 0,
    justifyContent: 'center',
  },
  btn: { paddingVertical: 8, color: '#eee' },
  indicatorStyle: {
    backgroundColor: '#2962FF',
    height: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewPodcastTabView;
