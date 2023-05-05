import * as React from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  Pressable,
  Icon,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export function LoginScreen() {
  const [show, setShow] = React.useState(false);

  return (
    <Center flex={1} px="3">
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
          >
            Bienvenido
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: 'warmGray.200',
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Inicia sesión para continuar!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Codigo ID</FormControl.Label>
              <Input
                type={show ? 'text' : 'password'}
                keyboardType="numeric"
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? 'visibility' : 'visibility-off'}
                        />
                      }
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  </Pressable>
                }
                placeholder="Codigo Vendedor"
              />
            </FormControl>

            <Button mt="2" colorScheme="indigo">
              Ingresar
            </Button>
          </VStack>
        </Box>
      </Center>
    </Center>
  );
}
