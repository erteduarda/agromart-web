import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    try{
      const response = await api.post(`${process.env.REACT_APP_LOGIN_POST}`, {
        identifier: email,
        password: password
      });
  
      console.log('signIn', response);

    }catch(err){
      console.log(err);
    }
  }, []);

  const signUp = useCallback(async ({ username, email, password }) => {

    try{
      const response = await api.post(`${process.env.REACT_APP_SIGNUP_POST}`, {
        username: username,
        email: email,
        password: password
      });
  
      console.log('signUp', response);

    }catch(err){
      console.log(err);
    }
  }, []);

  return(
    <AuthContext.Provider value={{ name: 'Igor', signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };