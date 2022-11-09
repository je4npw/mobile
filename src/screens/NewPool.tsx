import { Heading, Text, VStack } from 'native-base';

import Logo from '../assets/logo.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Header } from '../components/Header';

export function NewPool() {
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
        <Input mb={2} placeholder="Dê um nome para o seu Bolão" />
        <Button title="Criar Bolão" />
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
