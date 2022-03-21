import React, { useCallback, useRef, useContext } from 'react';

import logoImg from '../../assets/logo.svg';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { AuthContext } from '../../context/AuthContext';

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import { Container, Content, Background, Text } from './styles';
import { Form } from '@unform/web';

import { FormHandles } from '@unform/core'
import * as Yup from 'yup';

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signUp } = useContext(AuthContext);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
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
      signUp({
        username: data.username,
        email: data.email,
        password: data.password
      })

    }catch(err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }else{
        console.log(err);
      }
    }
  }, [signUp]);

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

export default SignUp;