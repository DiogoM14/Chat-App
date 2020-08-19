import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { Container, Input, ButtonContainer, Button, Circle, LandingImage, WelcomeText } from './styles';

import LoginPageImage from '../../assets/login-image.png';


const Login: React.FC = () => {
  const { name, setName } = useState();

  const { navigate } = useNavigation();

  function handleNavigateToChat() {
    navigate('Chat');
  }
  
  return (
    <Container>
      <Circle />
      <LandingImage source={LoginPageImage} />

      <WelcomeText>Username</WelcomeText>

      <Input 
        placeholder="Ex: Diogo_Martins" 
        onChangeText={name => {
          setName
      }} 
      value={name}
      />

      <ButtonContainer>
        <Button onPress={handleNavigateToChat}>
          <Feather name="arrow-right" size={20} color="#fff" />
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Login;