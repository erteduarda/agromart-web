import React from 'react';

import { AuthProvider } from './auth'
import { ToastProvider } from './toast'
import { NotificationProvider } from './notifications'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <NotificationProvider>
        { children }
      </NotificationProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;