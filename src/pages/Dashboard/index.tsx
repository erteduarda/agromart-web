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
  NotificationFormButton,
  Container,
  MenuButton,
  Logo,
  PowerButton,
  NewNotificationTitle
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { useNotifications, NotificationState } from '../../hooks/notifications';
import { useToast } from '../../hooks/toast';
import SideBar from '../../components/SideBar'
import { IconContext } from 'react-icons';
import { FiPower, FiMenu } from 'react-icons/fi';
import api from '../../services/api'

import './styles.css';

const Dashboard: React.FC = () => {
  api.defaults.headers.authorization = `Bearer ${localStorage.getItem('@AgroMart:token')}`;

  const { signOut, user } = useAuth();
  const { addToast  } = useToast();
  const [form, setForm] = useState({} as NotificationState);
  const [openMenu, setOpenMenu] = useState(true);

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
    addToast({
      type: 'success',
      title: 'Mensagem cadastrada!',
      description: 'A mensagem foi enviada aos usuários.'
    })
  }

  return (
    <Container>
      <SideBar toggle={openMenu}/>
      <Header>
        <HeaderContent>
          <Logo src={ logoImg } alt="Agromart" />
          <IconContext.Provider value={{color: 'white'}}>
            <MenuButton onClick={() => setOpenMenu(!openMenu)}>
              <FiMenu size={40}/>
            </MenuButton>
          </IconContext.Provider>
          <Profile>
            <img 
              src="https://avatars.githubusercontent.com/u/22936236?v=4" 
              alt={user.username}
            />
            <div>
              <span>Bem-vindo,</span>
            <strong>{user.username.split(' ')[0]}</strong>
            </div>
          </Profile>
          <PowerButton type="button" onClick={ signOut } >
            <FiPower />
          </PowerButton>
        </HeaderContent>
      </Header>
      <ContentTextArea>
        <NotificationsDashboard>
          <NotificationsDashboardTitle>Últimas Notícias</NotificationsDashboardTitle> 
          <CenterNotifications>
            {
              notifications.map((notification) => {
                return renderNotification(notification)
              })
            }
          </CenterNotifications>
        </NotificationsDashboard>
        <NotificationForm>
          <NewNotificationTitle>Novas Notificações</NewNotificationTitle>
          <NotificationFormInput onChange={inputTitle} placeholder="Insira um título..."/>
          <NotificationFormTextArea onChange={inputDescription} placeholder="Coloque uma descrição..."/>
          <NotificationFormButton onClick={newNotification}>Salvar Notificação</NotificationFormButton>
        </NotificationForm>
      </ContentTextArea>
    </Container>
  );
};

export default Dashboard;