import React, { useCallback, useRef } from 'react';

import api from '../../services/api'

import logoImg from '../../assets/logo.svg';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import { Container, Content, Background, Text } from './styles';
import { Form } from '@unform/web';

import { FormHandles } from '@unform/core'
import * as Yup from 'yup';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
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

  return(
    <Container>
      <Background/>
      <Content>
        <img src={ logoImg } alt="Agromart"/>
        <Text> AgroMart </Text>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="username" icon={ FiUser } placeholder="Nome"/>

          <Input name="email" icon={ FiMail } placeholder="E-mail"/>

          <Input name="password" icon={ FiLock } type="password" placeholder="Senha"/>

          <Button type="submit">Cadastrar</Button>

        </Form>

        <a href="/">
          <FiArrowLeft/>
          Voltar para login
        </a>
    </Content>
  </Container>
  );
};

export default Signup;