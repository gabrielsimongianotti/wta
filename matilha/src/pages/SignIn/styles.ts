import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === "android" ? 120 : 40}px;
`;

export const Title = styled.Text`
  font-size:24px;
  color: #f4ede8;
  font-family: 'TradeWinds-Regular';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 18px;
  font-family: 'TradeWinds-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #191919;
  border-top-width: 1px;
  border-color: #2B2B2B;
  padding: 16px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #FF0707;
  font-size: 18px;
  font-family: 'TradeWinds-Regular';
  margin-left: 16px;
`;
