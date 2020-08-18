import React from 'react';

import { Container } from './styles';

import LandingHeader from '../../Components/LandingHeader';

const Login: React.FC = () => {
  return (
    <Container>
      <LandingHeader title={'Username'} />
    </Container>
  );
}

export default Login;