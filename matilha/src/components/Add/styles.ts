import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 60px;
  height: 60px;
  background: #bd0507;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${Math.floor(Dimensions.get('window').width - 70)}px;
  top: ${Math.floor(Dimensions.get('window').height - 25)}px;
`;

export const ButtonText = styled.Text`
  font-family: 'TradeWinds-Regular';
  color: #fff;
  font-size: 50px;
`;
