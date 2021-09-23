import { Box, Button, Heading, Icon, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import InputComp from '../components/InputComp';

const LoginScreen = ({ route }) => {
  return (
    <Box flex={1}>
      <Box px={10} pt={24} flex={1}>
        <Box flexDirection="row" alignItems="center">
          <Text fontSize={36} textTransform="capitalize" fontWeight="600">
            welcome back,
          </Text>
        </Box>
        <Box pt={2} pr={30}>
          <Heading fontSize={36} textTransform="capitalize" ml={2}>
            Rebbeca
          </Heading>
        </Box>
        <Box pt={12}>
          <InputComp placeHolder="Email address" type="email" />
          <InputComp placeHolder="Password" type="password" />
        </Box>
        <Box flexDirection="row" pt={8}>
          <TouchableOpacity>
            <Icon as={<FontAwesome5Pro name="facebook-f" />} mr={5} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon as={<FontAwesome5Pro name="google" />} />
          </TouchableOpacity>
        </Box>
      </Box>
      <Box px={10} py={4}>
        <TouchableOpacity>
          <Text textTransform="capitalize" fontWeight="600" fontSize={18}>
            forgot password?
          </Text>
        </TouchableOpacity>
      </Box>
      <Box bg="gray.300" h="10%">
        <Button
          position="absolute"
          borderRadius={12}
          left="70%"
          bottom="60%"
          bg={route.name === 'Login' ? 'yellow.500' : 'red.400'}
          justifyContent="center"
          alignItems="center"
          py={4}
          px={6}>
          <Icon
            color="white"
            size="md"
            as={<FontAwesome5Icon name="long-arrow-alt-right" />}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default LoginScreen;
