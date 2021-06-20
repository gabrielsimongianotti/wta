import React, {useRef, useCallback, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Title,
  Header,
  Weekday,
  TitleDay,
  Schedule,
  SectionContent,
  SectionTitle,
  Section,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import getValidationErrors from '../../utils/getValidationError';
import api from '../../services/api';
import {useAuth} from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

export interface IGroup {
  id: string;
  weekday: string;
  name: string;
  initialHours: string;
  endHours: string;
}

const CreateGroup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {goBack} = useNavigation();
  const {user} = useAuth();
  const emailInputRef = useRef<TextInput>(null);
  const [selectedWeekday, setSelectedWeekday] = useState<string>('');
  const [initialHours, setInitialHour] = useState<string>('');
  const [endHours, setEndHour] = useState<string>('');
  const weekdays = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
    'Domingo',
  ];

  const hours = [
    '08:00:00',
    '08:30:00',
    '09:00:00',
    '09:30:00',
    '10:00:00',
    '10:30:00',
    '11:00:00',
    '11:30:00',
    '12:00:00',
    '12:30:00',
    '13:00:00',
    '13:30:00',
    '14:00:00',
    '14:30:00',
    '15:00:00',
    '15:30:00',
    '16:00:00',
    '16:30:00',
    '17:00:00',
    '17:30:00',
    '18:00:00',
    '18:30:00',
    '19:00:00',
    '19:30:00',
    '20:00:00',
    '20:30:00',
    '21:00:00',
    '21:30:00',
    '22:00:00',
    '22:30:00',
    '23:00:00',
    '23:30:00',
    '00:00:00',
  ];

  const handleSelectWeekDay = useCallback((weekday: string) => {
    setSelectedWeekday(weekday);
  }, []);

  const handleSelectEndHour = useCallback((hour: string) => {
    setEndHour(hour);
  }, []);

  const handleSelectInitialHour = useCallback((hour: string) => {
    setInitialHour(hour);
  }, []);

  const compareTime = useCallback((oneTime: string, secondTime: string) => {
    if (oneTime === secondTime) {
      return true;
    }
    if (secondTime === '00:00:00') {
      return false;
    }

    const time1 = oneTime.split(':');
    const time2 = secondTime.split(':');

    for (let i = 0; i < time1.length; i += 1) {
      if (time1[i] > time2[i]) {
        return true;
      }
      if (time1[i] < time2[i]) {
        return false;
      }
    }
    return false;
  }, []);

  const handleCreatGroup = useCallback(
    async ({name}: {name: string}) => {
      try {
        if (compareTime(initialHours, endHours)) {
          Alert.alert('Erro na hora', 'Hora inicial maior que hora final');
        } else {
          await api.post('/group', {
            endHours,
            name,
            initialHours,
            user_master_id: user.id,
            weekday: selectedWeekday,
          });

          goBack();

          Alert.alert(
            'atualisado com sucesso!',
            'Você ja pode fazer login na aplicação',
          );
        }
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        Alert.alert(
          'Erro na atualisação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }
    },
    [initialHours, endHours, selectedWeekday],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <Header>
          <Icon
            name="arrow-left"
            size={24}
            color="#fff"
            onPress={() => {
              goBack();
            }}
          />
          <Title>Crie sua mesa</Title>
          <View />
        </Header>
        <Container>
          <Form
            initialData={{name: user.name}}
            ref={formRef}
            onSubmit={({name}) => {
              handleCreatGroup({
                name,
              });
            }}>
            <ScrollView>
              <Input
                autoCapitalize="words"
                returnKeyType="next"
                name="name"
                placeholder="Nome da mesa"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />

              <Schedule>
                <Title>Escolha a Data</Title>
                <Section>
                  <SectionTitle>Dia da semana</SectionTitle>
                  <SectionContent>
                    {weekdays.map((weekday, int) => (
                      <Weekday
                        key={int}
                        onPress={() => {
                          handleSelectWeekDay(weekday);
                        }}
                        selected={selectedWeekday === weekday}>
                        <TitleDay>{weekday}</TitleDay>
                      </Weekday>
                    ))}
                  </SectionContent>
                </Section>
                <Title>Escolha os horarios</Title>
                <Section>
                  <SectionTitle>Inicial</SectionTitle>

                  <SectionContent>
                    {hours.map((hour, int) => (
                      <Weekday
                        key={int}
                        onPress={() => {
                          handleSelectInitialHour(hour);
                        }}
                        selected={initialHours === hour}>
                        <TitleDay>{hour}</TitleDay>
                      </Weekday>
                    ))}
                  </SectionContent>
                </Section>
                <Section>
                  <SectionTitle>Final</SectionTitle>
                  <SectionContent>
                    {hours.map((hour, int) => (
                      <Weekday
                        key={int}
                        onPress={() => {
                          handleSelectEndHour(hour);
                        }}
                        selected={endHours === hour}>
                        <TitleDay>{hour}</TitleDay>
                      </Weekday>
                    ))}
                  </SectionContent>
                </Section>
              </Schedule>
            </ScrollView>
          </Form>
          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}>
            Atualizar
          </Button>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateGroup;
