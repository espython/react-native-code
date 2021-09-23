import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useAppDispatch, useAppSelector } from '../redux/store';

import ForYouTbaNav from './ForYouTbaNav';
import RegisterAndLoginNavigation from './RegisterNavigation';
import { setUserData } from '../redux/user/userSlice';
import { User } from '../redux/user/types';
import Settings from '../screens/Settings';

const MainNavigation = () => {
  const { isAuth } = useAppSelector(state => state.userState);
  const [initializing, setInitializing] = useState(true);
  const dispatch = useAppDispatch();

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (initializing) {
      setInitializing(false);
    }
    if (user) {
      dispatch(
        setUserData({
          email: user.email,
          userId: user.uid,
          photoURL: user.photoURL,
          userName: user.displayName,
          isAuth: true,
        })
      );
    } else {
      dispatch(
        setUserData({
          isAuth: false,
          email: null,
          userId: null,
          photoURL: null,
          userName: null,
        })
      );
    }
  }
  // isAuth = true;
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return (
      <Box flex={1} justifyContent="center">
        <Spinner size="lg" />
      </Box>
    );
  }

  return (
    <Box flex={1}>
      <NavigationContainer>
        <Stack.Navigator>
          {!isAuth ? (
            <>
              <Stack.Screen
                name="SignIn"
                component={RegisterAndLoginNavigation}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={ForYouTbaNav}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Box>
  );
};

export default MainNavigation;
