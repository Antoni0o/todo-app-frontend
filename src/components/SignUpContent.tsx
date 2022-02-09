import { Box, Text, Button, Center, GridItem, Heading, Input, Link, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";

import { RegisterBox } from "./RegisterBox";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState } from 'react';
import { api } from '../api';

const SignUpContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <RegisterBox>
      <GridItem>
        <Box marginLeft='0.4em'>
          <ThemeSwitcher />
        </Box>
        <Heading
          marginTop={{
            xl: '0.2em',
            md: '0',
            base: '0.2em'
          }}
          marginLeft='0.6em'
          fontWeight='bold'
          fontSize='6xl'
        >
          Sign Up
        </Heading>
        <form
          onSubmit={(e) => {
            setIsLoading(true);
            e.preventDefault();

            api.post('/user/', {
              name: username,
              email,
              password
            })
            .then(() => {
              setTimeout(() => {
                if(error) {
                  setError('');
                }
  
                router.push('/');
              }, 1000)
            })
            .catch((err) => {
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);

              setError(err.response.data.message);
            });

          }}
        >
          <Center
            flexDirection='column'
          >
            {error &&
              <Text
                fontSize='12px'
                color='danger.300'
                marginBottom='-1.6rem'
                marginTop='0.6rem'
              >
                {error}
              </Text>
            }
            <Input
              placeholder='Username'
              value={username}
              onChange={(e) => {
                const { value } = e.target;
                setUsername(value);
              }}
              width='80%'
              marginTop='2em'
              _focus={{
                borderColor: colorMode === 'dark' ? 'light.300' : 'blue.100'
              }}
            />
            <Input
              placeholder='E-mail'
              type='email'
              value={email}
              onChange={(e) => {
                const { value } = e.target;
                setEmail(value);
              }}
              width='80%'
              marginTop='1em'
              _focus={{
                borderColor: colorMode === 'dark' ? 'light.300' : 'blue.100'
              }}
            />
            <Input
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => {
                const { value } = e.target;
                setPassword(value);
              }}
              width='80%'
              marginTop='1em'
              _focus={{
                borderColor: colorMode === 'dark' ? 'light.300' : 'blue.100'
              }}
            />
            <Button
              isLoading={isLoading}
              type='submit'
              variant='outline'
              marginTop='1em'
              width='80%'
              borderColor={colorMode === 'dark' ? 'light.100' : 'blue.100'}
              color={colorMode === 'dark' ? 'light.100' : 'blue.100'}
              _hover={{
                bg: colorMode === 'dark' ? 'light.100' : 'blue.100',
                color: colorMode === 'dark' ? 'blue.100' : 'light.100'
              }}
              rightIcon={<FaArrowRight />}
            >
              Sign Up
            </Button>
            <Link
              marginTop="0.4em"
              onClick={() => router.push('/')}
            >
              Or Sign In
            </Link>
          </Center>
        </form>
      </GridItem>
    </RegisterBox>
  )
};

export { SignUpContent };

