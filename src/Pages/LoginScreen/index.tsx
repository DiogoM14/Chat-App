import React from 'react';

import { Container } from './styles';

import LandingHeader from '../../Components/LandingHeader';

import LoginPageImage from '../../assets/login-image.png';


const Login: React.FC = () => {
  return (
    <Container>
      <LandingHeader title={'Username'} imgUrl={LoginPageImage} />
    </Container>
  );
}

export default Login;