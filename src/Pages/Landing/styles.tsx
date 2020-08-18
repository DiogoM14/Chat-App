import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #f4f5f7;
`;

export const GetStartButton = styled(RectButton)`
  width: 200px;
  height: 60px;
  margin-top: 120px;
  flex-direction: row;

  align-self: center;
  justify-content: center;
  align-items: center;

  background: #002db3;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: Poppins_600SemiBold;
  margin-right: 12px;
  font-size: 18px;

`;