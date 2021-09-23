import validator from 'validator';
import { RegisterScreenState } from '../screens/RegisterScreen';

export interface SignupErrors {
  emailError?: string;
  passwordError?: string;
  passwordAgainError?: string;
}
export const signUpValidator = ({
  email,
  password,
  passwordAgain,
}: RegisterScreenState) => {
  const errors: SignupErrors = {};

  if (!validator.isEmail(email)) {
    errors.emailError = 'Please enter valid email address.';
  }
  if (validator.isEmpty(email)) {
    errors.emailError = 'Please enter your email address.';
  }

  // if (!validator.matches(data.password, /(?=.*\d)(?=.*[a-z])(?=.*\W)/)) {
  //   errors.password =
  //     'Password must be a combination of letters, one special character, and a number.'
  // }
  if (!validator.isByteLength(password, { min: 6 })) {
    errors.passwordError = 'Password should be minimum 6 characters.';
  }

  if (validator.isEmpty(passwordAgain)) {
    errors.passwordAgainError = 'Please enter your confirm password.';
  }
  if (password !== passwordAgain) {
    errors.passwordAgainError =
      'Entered password and confirm password must be the same.';
  }
  // if (!data.condition) errors.condition = 'Please accept the Terms & Conditions.'
  return { errors, isValid: Object.keys(errors).length <= 0 };
};
