import React, { useCallback, useRef } from 'react';
import {  View, KeyboardAvoidingView, ScrollView, Platform, TextInput, Alert } from 'react-native';
import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import * as Yup from "yup";

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationError';

import Input from '../../components/Input';
import Button from '../../components/Button';


const SignIn: React.FC = () => {
  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { signIn, user } = useAuth();

  interface SignInFormData {
    email: string;
    password: string;
  }

  const handleSignIn = useCallback(async (data: SignInFormData) => {

    try {
      const schama = Yup.object().shape({
        email: Yup.string().required('Email obrigatorio').email('Digite um email valido'),
        password: Yup.string().required('Senha obrigatoria')
      });

      await schama.validate(data, { abortEarly: false })
      await signIn({
        email: data.email,
        password: data.password,
      })
    } catch (err) {

      if (err instanceof Yup.ValidationError) {
        console.log(err)
        const errors = getValidationErrors(err);
        console.log(errors)
        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, cheque as credenciais.')
    }

  }, []);


  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
  
            <View>
              <Title>Faça seu login</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType='email-address'
                name='email'
                icon='mail'
                placeholder='E-mail'
                returnKeyType="next"
                onSubmitEditing={() => [
                  passwordInputRef.current?.focus()
                ]}
              />

              <Input
                ref={passwordInputRef}
                secureTextEntry
                name='password'
                icon='lock'
                placeholder='Senha'
                returnKeyType='send'
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />


            </Form>
            <Button onPress={() => { formRef.current?.submitForm() }}>Entrar</Button>
            <ForgotPassword>

              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>

            </ForgotPassword>

          </Container>
        </ScrollView>
        <CreateAccountButton onPress={() => {
          navigate('SignUp');
        }}>

          <Icon name='log-in' size={20} color="#FF0707" />

          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>

        </CreateAccountButton>

      </KeyboardAvoidingView>

    </>
  );
}

export default SignIn;
