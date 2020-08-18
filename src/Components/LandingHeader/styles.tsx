import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #f4f5f7;
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
  width: 250px;
  height: 300px;
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