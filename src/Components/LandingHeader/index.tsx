import React from 'react';
import { ImageURISource } from 'react-native';

import { Container, Circle, WelcomeText, LandingImage } from './styles';

export interface LandingHeaderProps {
  title: string;
  imgUrl: ImageURISource;
}

const LandingHeader: React.FC<LandingHeaderProps> = ({ title, imgUrl }) => {

  return (
    <Container>
      <Circle />
      <LandingImage source={imgUrl} />

      <WelcomeText>{title}</WelcomeText>
    </Container>
  );
}

export default LandingHeader;