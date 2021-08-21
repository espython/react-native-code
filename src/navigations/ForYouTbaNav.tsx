import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopNewsScreen from '../screens/TopNewsScreen';
import TrendingNewsScreen from '../screens/TrendingNewsScreen';
import { getHeaderTitle } from '@react-navigation/elements';
import { entertainment, forYouTabBarIcon, international } from '../assets';
import ForYouScreen from '../screens/ForYouScreen';
import TopBar from '../components/TopBar';
import TabBarIcon from '../components/TabBarIcon';

const ForYouTbaNav = () => {
  const Tab = createBottomTabNavigator();
  return (
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
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);

          return <TopBar style={options.headerStyle} title={title} />;
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
        name="Settings"
        component={TrendingNewsScreen}
        options={{
          tabBarLabel: 'Special',
          tabBarIcon: ({ size }) => (
            <TabBarIcon size={size} source={entertainment} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ForYouTbaNav;
