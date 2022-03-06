import React from 'react';
import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={ logoImg } alt="Agromart" />
      SignIn
    </Content>
  </Container>
);

export default SignIn;