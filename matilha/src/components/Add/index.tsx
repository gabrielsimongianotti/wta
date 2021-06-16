import React from 'react';

import {Container, ButtonText} from './styles';

const Add: React.FC = ({...rest}) => (
  <Container {...rest}>
    <ButtonText>+</ButtonText>
  </Container>
);

export default Add;
