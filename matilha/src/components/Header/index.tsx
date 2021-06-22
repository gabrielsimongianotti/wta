import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Title} from './styles';

interface HeaderProps  {
  nameIcon: string;
  iconOnClick: ()=>void;
  title: string;
  children?: string;
}
const Header:React.FC<HeaderProps> = ({children =<View/>, nameIcon, iconOnClick, title, ...rest}) => (
  <Container {...rest}>
    <Icon
      name={nameIcon}
      size={24}
      color="#fff"
      onPress={() => {
        iconOnClick();
      }}
    />
    <Title>{title}</Title>
    {children}
  </Container>
);

export default Header;
