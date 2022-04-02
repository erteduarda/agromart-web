import React, { useCallback, useRef } from 'react';
import logoImg from '../../assets/logo.svg';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import { Container, Content, Background, Text, AnimationContainer } from './styles';
import { Link } from 'react-router-dom'

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signUp } = useAuth();
  const { addToast } = useToast();

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
      
      await signUp({
        username: data.username,
        email: data.email,
        password: data.password
      });

    }catch(err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
      
      addToast({
        type: 'error',
        title: 'Erro ao criar conta',
        description: 'Ocorreu um erro ao tentar criar uma conta'
      });
    }
  }, [signUp]);

  return(
    <Container>
      <Background/>
      <Content>
        <AnimationContainer>
          <img src={ logoImg } alt="Agromart"/>
          <Text> AgroMart </Text>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="username" icon={ FiUser } placeholder="Nome"/>

            <Input name="email" icon={ FiMail } placeholder="E-mail"/>

            <Input name="password" icon={ FiLock } type="password" placeholder="Senha"/>

            <Button type="submit">Cadastrar</Button>

          </Form>

          <Link to="/">
            <FiArrowLeft/>
            Voltar para login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;