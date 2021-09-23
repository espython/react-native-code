import React, { useState } from 'react';
import { Box, Button, Heading, Icon, Text } from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import InputComp from '../components/InputComp';
import { TouchableOpacity } from 'react-native';
import { signUpValidator } from '../utils/validations';
import { signupWithEmailAndPassword } from '../utils/auth';

export interface RegisterScreenState {
  email: string;
  password: string;
  passwordAgain: string;
  errors?: {
    emailError?: string;
    passwordError?: string;
    passwordAgainError?: string;
  };
}

const RegisterScreen = () => {
  const [state, setState] = useState<RegisterScreenState>({
    email: '',
    password: '',
    passwordAgain: '',
  });

  return (
    <Box flex={1}>
      <Box px={10} pt={24} flex={1}>
        <Box flexDirection="row" alignItems="center">
          <Text
            fontFamily="Quicksand"
            fontSize={36}
            textTransform="capitalize"
            fontWeight="500">
            hello
          </Text>
          <Heading fontSize={36} textTransform="capitalize" ml={2}>
            beautiful ,
          </Heading>
        </Box>
        <Box pt={4} pr={30}>
          <Text
            fontSize={16}
            textAlign="left"
            fontWeight="500"
            fontFamily="Quicksand">
            Enter your informations below or login with a social account
          </Text>
        </Box>
        <Box pt={12}>
          <InputComp
            placeHolder="Email address"
            type="email"
            setValue={setState}
            value={state.email}
            id="email"
            error={state?.errors?.emailError}
          />
          <InputComp
            placeHolder="Password"
            type="password"
            setValue={setState}
            value={state.password}
            id="password"
            error={state.errors?.passwordError}
          />
          <InputComp
            placeHolder="Password again"
            type="password"
            setValue={setState}
            value={state.passwordAgain}
            error={state.errors?.passwordAgainError}
          />
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
      <Box bg="gray.300" h="10%">
        <Button
          position="absolute"
          borderRadius={12}
          left="70%"
          bottom="60%"
          bg="red.400"
          justifyContent="center"
          alignItems="center"
          py={4}
          px={6}
          onPress={() => {
            const validation = signUpValidator({
              email: state.email,
              password: state.password,
              passwordAgain: state.passwordAgain,
            });
            if (validation.isValid) {
              console.log("I'm valid");
              signupWithEmailAndPassword(state.email, state.password);
            } else {
              setState(state => ({
                ...state,
                errors: { ...validation.errors },
              }));
              console.log('error', validation);
            }
          }}>
          <Icon
            color="white"
            as={<FontAwesome5Icon name="long-arrow-alt-right" />}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
