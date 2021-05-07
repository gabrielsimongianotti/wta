import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`

  width: 100%;
  height: 60px;
  background: #bd0507;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  margin-top:8px;
`;

export const ButtonText = styled.Text`

  font-family: 'Trade Winds';
  color: #fff;
  font-size: 18px
`;
