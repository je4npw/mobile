import { useState } from 'react';
import { Heading, Text, VStack, useToast } from 'native-base';
import { api } from '../services/api';
import Logo from '../assets/logo.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Header } from '../components/Header';

export function NewPool() {
  const toast = useToast();
  const [poolTitle, setPoolTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  async function handlePoolCreate() {
    if (!poolTitle.trim()) {
      return toast.show({
        title: 'Informe um nome para o seu Bolão',
        placement: 'top',
        bgColor: 'red.500',
      });
    }
    try {
      setIsLoading(true);
      const response = await api.post('/pools', {
        title: poolTitle.toUpperCase(),
      });
      toast.show({
        title: 'Bolão Id ' + response.data.code + ' criado com sucesso.',
        placement: 'top',
        bgColor: 'green.500',
      });
      setPoolTitle('');
    } catch (error) {
      console.log(error);
      toast.show({
        title: error,
        placement: 'top',
        bgColor: 'red.500',
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar novo Bolão" />
      <VStack mt={8} mx={5} alignItems="center">
        <Logo />
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          my={8}
          textAlign="center"
        >
          Crie seu próprio Bolão da Copa{'\n'} e compartilhe com amigos!
        </Heading>
        <Input
          onChangeText={setPoolTitle}
          value={poolTitle}
          mb={2}
          placeholder="Dê um nome para o seu Bolão"
        />
        <Button
          isLoading={isLoading}
          onPress={() => handlePoolCreate()}
          title="CRIE SEU BOLÃO ⚽"
        />
        <Text
          color="gray.200"
          fontSize={'sm'}
          textAlign="center"
          px={10}
          mt={4}
        >
          Após criar seu bolão, você receberá um {'\n'}código único que poderá
          usar para convidar {'\n'}outras pessoas.
        </Text>
      </VStack>
    </VStack>
  );
}
