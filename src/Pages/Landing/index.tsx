import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, GetStartButton, ButtonText } from './styles';
import { Feather } from '@expo/vector-icons';

import LandingHeader from '../../Components/LandingHeader';

import LandingPageImage from '../../assets/landing-image.png';



const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToChat() {
    navigate('Login');
  }
  
  return (
    <Container>
      <LandingHeader title={'Bem-vindo ao Live Chat'} imgUrl={LandingPageImage} />

      <GetStartButton onPress={handleNavigateToChat}>
        <ButtonText>Começar</ButtonText>

        <Feather name="arrow-right" size={20} color="#fff" />
      </GetStartButton>
    </Container>
  );
}

export default Landing;