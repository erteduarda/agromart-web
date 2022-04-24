import React, { useEffect, useCallback, useState } from 'react';
// import Header from '../Header';
import { 
  Header, 
  HeaderContent, 
  Profile, 
  ContentTextArea, 
  NotificationBox,
  NotificationTitle,
  NotificationsDashboard,
  CenterNotifications,
  NotificationsDashboardTitle,
  NotificationForm,
  NotificationFormInput,
  NotificationFormTextArea,
  NotificationFormButton 
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { useNotifications, NotificationState } from '../../hooks/notifications';
import { useToast } from '../../hooks/toast';

import { FiPower } from 'react-icons/fi';

import './styles.css'

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { addToast  } = useToast();
  const [form, setForm] = useState({} as NotificationState);

  const { notifications, getNotifications, saveNotification } = useNotifications();


  useEffect(()=>{
    getNotifications()
  }, [])

  const renderNotification = useCallback((notification: NotificationState) => {
    return (
      <NotificationBox key={notification.id}>
        <NotificationTitle>{notification.title}</NotificationTitle>
        <p>{notification.body_text} </p>
      </NotificationBox>
    )
  }, [notifications])

  const inputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, title: event.currentTarget.value})
  }

  const inputDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({...form, body_text: event.currentTarget.value})
  }

  const newNotification = () => {
    if(!form.hasOwnProperty('title') || !form.hasOwnProperty('body_text')){
      addToast({
        type: 'error',
        title: `Erro ao cadastrar ${!form.hasOwnProperty('title') ? 'título' : 'descrição'}`,
        description: `Por favor, informe ${!form.hasOwnProperty('title') ? 'o título' : 'a descrição'}`
      })
      return 
    }

    saveNotification(form)
    getNotifications()
  }

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

          <button type="button" onClick={ signOut } >
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <ContentTextArea>
        <NotificationsDashboard>
          <NotificationsDashboardTitle>Notificações</NotificationsDashboardTitle> 
          <CenterNotifications>
            {
              notifications.map((notification) => {
                return renderNotification(notification)
              })
            }
          </CenterNotifications>
        </NotificationsDashboard>
        <NotificationForm>
          <NotificationFormInput onChange={inputTitle} placeholder="Título"/>
          <NotificationFormTextArea onChange={inputDescription} placeholder="Descrição"/>
          <NotificationFormButton onClick={newNotification}>Salvar Notificação</NotificationFormButton>
        </NotificationForm>
      </ContentTextArea>
    </>
  );
};

export default Dashboard;