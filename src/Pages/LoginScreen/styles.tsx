import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  
`;

export const Circle = styled.View`
  width: 500px;
  height: 750px;
  border-radius: 250px;
  background: #fff;
  position: absolute;
  left: -120px;
  top: -200px;
`;

export const LandingImage = styled.Image`
  width: 150px;
  height: 100px;
  margin-top: 64px;
  align-self: center;
`;

export const WelcomeText = styled.Text`
  max-width: 200px;
  font-family: Archivo_700Bold;
  font-size: 30px;
  color: #514e5a;
  margin: 32px 35px;
`;

export const Input = styled.TextInput`
  margin: 32px 32px 0 32px;
  height: 50px;
  border-width: 1px;
  border-color:#bab7c3;
  border-radius: 30px;
  padding: 0 16px;
  color: #514e5a;
  font-family: Poppins_600SemiBold;
`;

export const ButtonContainer = styled.View`
  align-items: flex-end;
  margin-top: 30px;

`;

export const Button = styled(RectButton)`
  width: 70px;
  height: 70px;
  margin-right: 32px;
  border-radius: 70px;
  background: #002db3;
  align-items: center;
  justify-content: center;
`;