import React, { useEffect } from 'react';
// import Header from '../Header';
import { 
  Header, 
  HeaderContent, 
  Profile, 
  ContentTextArea, 
  HeaderNotifications 
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { useNotifications } from '../../hooks/notifications';

import { FiPower } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { notifications, getNotifications } = useNotifications();


  useEffect(()=>{
    getNotifications()
  }, [])

  useEffect(()=>{
    console.log(notifications)
  }, notifications)

  return (
    <>
      <Header>
        <HeaderContent>
          <img src={ logoImg } alt="Agromart" />

          <Profile>
            <img 
              src="https://avatars.githubusercontent.com/u/54074370?v=4" 
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
      <ContentTextArea>
        <HeaderNotifications>
          {/* renderNotifications */}
          {/* notifications.map()  */}
        </HeaderNotifications>
      </ContentTextArea>
    </>
  );
};

export default Dashboard;