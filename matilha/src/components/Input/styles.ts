import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';


interface ContainerProps {
  isFocused: Boolean;
  isErrored: Boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #141414;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width:2px;
  border-color: #141414;

  flex-direction: row;
  align-items: center;

  ${props => props.isErrored && css`
    border-color: #c53030
  `}

  ${props => props.isFocused && css`
    border-color: #8E8A99
  `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlad-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
