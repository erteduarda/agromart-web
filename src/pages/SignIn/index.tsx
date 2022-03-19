import React, { useCallback, useRef } from 'react';
import logoImg from '../../assets/logo.svg';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background, Text } from './styles';
import { Form } from '@unform/web'

import { FormHandles } from '@unform/core'

import getValidationErrors from '../../utils/getValidationErrors';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false
      });

      // const response = await api.post('auth/local/register', data);

      // console.log(response);

    }catch(err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }else{
        console.log(err);
      }
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={ logoImg } alt="Agromart"/>
        <Text> AgroMart </Text>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input name="email" icon={ FiMail } placeholder="E-mail"/>

          <Input name="password" icon={ FiLock } type="password" placeholder="Senha"/>

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="/signup">
          <FiLogIn/>
          Criar conta
        </a>
      </Content>
      <Background/>
    </Container>
  );
}

export default SignIn;