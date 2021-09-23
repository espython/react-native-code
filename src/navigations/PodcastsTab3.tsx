import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PodcastsList from '../components/PodcastsList';
import { NavigationContainer } from '@react-navigation/native';
import { Box } from 'native-base';

const Tab = createMaterialTopTabNavigator();

function PodcastTabs3() {
  return (
    <Box>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={PodcastsList} />
        <Tab.Screen name="Settings" component={PodcastsList} />
      </Tab.Navigator>
    </Box>
  );
}

export default PodcastTabs3;
