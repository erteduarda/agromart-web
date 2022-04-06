import React from 'react';
// import Header from '../Header';
import { DashboardContainer, Container, Header, HeaderContent, Profile } from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

import { FiPower } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={ logoImg } alt="Agromart" />

          <Profile>
            <img 
              src="https://avatars.githubusercontent.com/u/22936236?v=4" 
              alt={user.username}
            />
            <div>
              <span>Bem-vindo,</span>
            <strong>{user.username}</strong>
            </div>
          </Profile>

          <button type="button" onClick={ signOut }>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <DashboardContainer/>
    </Container>
  );
};

export default Dashboard;