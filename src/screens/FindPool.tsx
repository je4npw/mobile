import { Heading, useToast, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { useState } from 'react';
import { api } from '../services/api';

export function FindPool() {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');
  const toast = useToast();
  const { navigate } = useNavigation();
  async function handleJoinPool() {
    setIsLoading(true);
    try {
      if (!code.trim()) {
        return toast.show({
          title: 'Não digitou nenhum código',
          placement: 'top',
          bgColor: 'red.500',
        });
      }
      await api.post('/pools/join', { code });
      navigate('pools');
      toast.show({
        title: 'Você entrou no Bolão',
        placement: 'top',
        bgColor: 'green.500',
      });
    } catch (error) {
      setIsLoading(false);
      if (error.response?.data?.message) {
        return toast.show({
          title: error.response.data.message,
          placement: 'top',
          bgColor: 'red.500',
        });
      }
    }
  }
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar Bolão por código" showBackButton />

      <VStack mt={8} mx={5} alignItems="center">
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          mb={8}
          textAlign="center"
        >
          Encontre um bolão através de{'\n'} seu código único
        </Heading>
        <Input
          onChangeText={setCode}
          autoCapitalize={'characters'}
          mb={2}
          placeholder="Qual o código do seu Bolão?"
        />
        <Button
          title="Buscar Bolão"
          isLoading={isLoading}
          onPress={handleJoinPool}
        />
      </VStack>
    </VStack>
  );
}
