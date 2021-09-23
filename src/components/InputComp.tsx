import { Box, FormControl, Input } from 'native-base';
import React, { Dispatch, SetStateAction } from 'react';
import { RegisterScreenState } from '../screens/RegisterScreen';

export interface InputCompProps {
  placeHolder: string;
  type?: string;
  value: string;
  setValue: Dispatch<SetStateAction<RegisterScreenState>>;
  id?: string;
  error?: string;
}
const InputComp = ({
  placeHolder,
  type,
  value,
  setValue,
  id,
  error,
}: InputCompProps) => {
  const isInvalid = error ? true : false;
  return (
    <Box pt={4}>
      <FormControl isInvalid={isInvalid}>
        <Input
          variant="underlined"
          placeholder={placeHolder}
          paddingLeft={0}
          type={type}
          _light={{
            placeholderTextColor: 'blueGray.400',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
          onChangeText={text => {
            if (id === 'email') {
              setValue(state => ({ ...state, email: text }));
            } else if (id === 'password') {
              setValue(state => ({ ...state, password: text }));
            } else {
              setValue(state => ({ ...state, passwordAgain: text }));
            }
          }}
          defaultValue={value}
        />

        <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
      </FormControl>
    </Box>
  );
};

export default InputComp;
