import { Heading, VStack } from 'native-base';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Header } from '../components/Header';

export function FindPool() {
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
        <Input mb={2} placeholder="Qual o código do seu Bolão?" />
        <Button title="Buscar Bolão" />
      </VStack>
    </VStack>
  );
}