import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import { Box, Icon, Text } from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TabBar = ({ state, descriptors, navigation, position, route }) => {
  const onPress = ({ route, index, isFocused }) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, merge: true });
    }
  };
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      px={8}
      py={4}
      alignItems="center">
      <Box flexDirection="row" flex={1}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          return (
            <TouchableOpacity
              key={route.name}
              onPress={() => onPress({ route, index, isFocused })}>
              <Box
                mr={12}
                py={2}
                px={0.5}
                borderBottomWidth={!isFocused ? 0 : 1.5}
                flexDirection="row"
                justifyContent="center"
                // borderBottomColor={!isFocused ? 'gray.300' : 'gray.900'}
                alignItems="center">
                <Text
                  fontFamily="Quicksand"
                  fontWeight="bold"
                  textAlign="center"
                  opacity={!isFocused ? 0.5 : 1}>
                  {route.name}
                </Text>
              </Box>
            </TouchableOpacity>
          );
        })}
      </Box>
      <Box
        bg={state.index === 0 ? 'yellow.500' : 'red.400'}
        p={2}
        borderRadius={10}>
        <Icon as={<FontAwesome5Icon name="user-circle" />} color="gray.50" />
      </Box>
    </Box>
  );
};

function RegisterAndLoginNavigation() {
  return (
    <Box flex={1} safeArea safeAreaTop={12} safeAreaBottom={0}>
      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Sign Up" component={RegisterScreen} />
      </Tab.Navigator>
    </Box>
  );
}

export default RegisterAndLoginNavigation;
