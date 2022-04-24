import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface NotificationState {
  id: number,
  loja_id: number,
  title: string,
  body_text: string
}

interface BodyNotification {
  title: string;
  body_text: string;
}

interface NotificationContextData {
  notifications: NotificationState[],
  getNotifications(): Promise<void>,
  sendNotifications(notification: BodyNotification): Promise<void>,
  saveNotification(notification: BodyNotification): Promise<void>,
}

const NotificationContext = createContext<NotificationContextData>({} as NotificationContextData);

const NotificationProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<NotificationState[]>([{} as NotificationState] );

  const saveNotification = useCallback(async ({title, body_text}) => {
    await api.post(`${process.env.REACT_APP_NOTIFICATION}`, {
      title,
      body_text
    });
  }, [])

  const sendNotifications = useCallback(async ({title, body_text})=>{
    await api.post(`${process.env.REACT_APP_PUSH_NOTIFICATION_POST}`, {
      title,
      body_text
    })
  }, [])

  const getNotifications = useCallback(async () => {
    const response = await api.get(`${process.env.REACT_APP_NOTIFICATION}`)
    // console.log(response.data)
    setData(response.data)
  }, [])

  return(
    <NotificationContext.Provider value={{ notifications: data, getNotifications, saveNotification, sendNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
}

function useNotifications(): NotificationContextData {
  const context = useContext(NotificationContext);

  if(!context){
    throw new Error('useNotification must be used within an AuthProider');
  }

  return context;
}

export { NotificationProvider, useNotifications };
export type { NotificationState };
