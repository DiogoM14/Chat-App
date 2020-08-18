import React from 'react';

import { Container, Circle, LandingImage, WelcomeText } from './styles';

import LandingBackground from '../../assets/landing-image.png';

interface LandingHeaderProps {
  title: string;
}

const LandingHeader: React.FC<LandingHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Circle />
      <LandingImage source={LandingBackground} />

      <WelcomeText>{title}</WelcomeText>
    </Container>
  );
}

export default LandingHeader;