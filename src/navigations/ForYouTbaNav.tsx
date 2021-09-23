import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopNewsScreen from '../screens/TopNewsScreen';
import TrendingNewsScreen from '../screens/TrendingNewsScreen';
import { getHeaderTitle } from '@react-navigation/elements';
import { entertainment, forYouTabBarIcon, international } from '../assets';
import ForYouScreen from '../screens/ForYouScreen';
import TopBar from '../components/TopBar';
import TabBarIcon from '../components/TabBarIcon';
import { Box } from 'native-base';
import PodcastScreen from '../screens/PodcastScreen';
import { useAppSelector } from '../redux/store';

const ForYouTbaNav = () => {
  const Tab = createBottomTabNavigator();
  const showPodcastScreen = useAppSelector(
    state => state.podcastScreenState.showPodcastScreen
  );
  return (
    <Box flex={1}>
      <Box flex={1} safeArea safeAreaBottom={2} safeAreaTop={8}>
        <Tab.Navigator
          initialRouteName="ForYou"
          screenOptions={{
            tabBarActiveTintColor: '#000',
            tabBarStyle: {
              paddingTop: 4,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: -1,
              },
              shadowRadius: 5,
              shadowOpacity: 0.2,
            },
            tabBarLabelStyle: {
              fontFamily: 'Quicksand',
              fontSize: 12,
              fontWeight: '700',
              paddingTop: 4,
            },
            headerShown: false,
            header: ({ navigation, route, options }) => {
              const title = getHeaderTitle(options, route.name);
              console.log('nav', navigation, '   ', title);
              return <TopBar />;
            },
            headerStyle: {
              height: 64, // Specify the height of your custom header
            },
          }}>
          <Tab.Screen
            name="ForYou"
            component={ForYouScreen}
            options={{
              tabBarLabel: 'For you',
              tabBarIcon: ({ size }) => (
                <TabBarIcon size={size} source={forYouTabBarIcon} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={TopNewsScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarIcon: ({ size }) => (
                <TabBarIcon size={size} source={international} />
              ),
            }}
          />
          <Tab.Screen
            name="Special"
            component={TrendingNewsScreen}
            options={{
              tabBarLabel: 'Special',
              tabBarIcon: ({ size }) => (
                <TabBarIcon size={size} source={entertainment} />
              ),
            }}
          />
        </Tab.Navigator>
      </Box>
      <PodcastScreen isOpen={showPodcastScreen} />
    </Box>
  );
};

export default ForYouTbaNav;
