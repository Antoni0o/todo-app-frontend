import { Box, Link, Button, Center, FormControl, GridItem, Heading, Input, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";

import { RegisterBox } from "./RegisterBox";
import { ThemeSwitcher } from "./ThemeSwitcher";

const LoginContent = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <RegisterBox>
      <GridItem>
        <Box marginLeft='0.4em'>
          <ThemeSwitcher />
        </Box>
        <Heading
          marginTop='0.6em'
          marginLeft='0.6em'
          fontWeight='bold'
          fontSize='6xl'
        >
          Login
        </Heading>
        <FormControl>
          <Center
            flexDirection='column'
          >
            <Input
              width='80%'
              marginTop='2em'
              placeholder='Username'
              _focus={{
                borderColor: colorMode === 'dark' ? 'light.300' : 'blue.100'
              }}
            />
            <Input
              placeholder='Password'
              type='password'
              width='80%'
              marginTop='1em'
              _focus={{
                borderColor: colorMode === 'dark' ? 'light.300' : 'blue.100'
              }}
            />
            <Button
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
              Login
            </Button>
            <Link
              marginTop="0.4em"
              onClick={() => router.push('/sign-in')}
            >
              Or Sign Up
            </Link>
          </Center>
        </FormControl>
      </GridItem>
      <GridItem
        bgImage="url('https://i.pinimg.com/originals/9c/e5/46/9ce546b1c53891e2980bce2358a6256e.jpg')"
        bgRepeat='no-repeat'
        bgPosition='center'
        bgSize='cover'
        borderLeftRadius={{
          xl: '5%',
          md: '5%'
        }}
        borderRightRadius={{
          xl: 'lg',
          md: 'lg'
        }}
        borderTopRadius={{
          base: '5%'
        }}
        borderBottomRadius={{
          base: 'lg'
        }}
      >
      </GridItem>
    </RegisterBox>
  )
};

export { LoginContent };