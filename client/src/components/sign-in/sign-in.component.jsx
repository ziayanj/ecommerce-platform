import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, SignInTitle, ButtonsContainer } from './sign-in.styles';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          type="email" 
          name="email" 
          value={email} 
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password" 
          name="password" 
          value={password} 
          handleChange={handleChange}
          label="Password"
          required 
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={() => dispatch(googleSignInStart)} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}

export default SignIn;