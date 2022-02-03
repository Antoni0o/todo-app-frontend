import { Box, Button, ButtonGroup, Center, color, Flex, FormControl, Grid, GridItem, Heading, Image, Input, Link, Text, useColorMode, useStyleConfig } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { FaArrowRight } from 'react-icons/fa';

import { ThemeSwitcher } from '../src/components/ThemeSwitcher';
import { IGlobalStyleProps } from '../src/IGlobalStylesProps';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Center h='100vh'>
      <Box 
        width={{
          base: '80%',
          md: '90%',
          xl: '60%'
        }}
        height={{
          base: '90%',
          md: '50%',
          xl: '70%'
        }}
        borderWidth='1px'
        borderRadius='lg'
        boxShadow= {colorMode === 'light' ? '0 0 4px 2px #efdfde' : ''}
      >
        <Flex>
          <Box w="50%">
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
                      borderColor: colorMode === 'dark' ? 'light.300' : 'dark.300'
                    }}  
                  />
                  <Input 
                    placeholder='Password'
                    type='password'
                    width= '80%'
                    marginTop = '1em'
                    _focus={{
                      borderColor: colorMode === 'dark' ? 'light.300' : 'dark.300'
                    }}  
                  />
                  <Button
                    type='submit'
                    variant='outline'
                    marginTop='1em'
                    width='80%'
                    borderColor={colorMode === 'dark' ? 'light.100' : 'dark.300'}
                    color={colorMode === 'dark' ? 'light.100' : 'dark.300'}
                    _hover={{
                      bg: colorMode === 'dark' ? 'light.100' : 'dark.300',
                      color: colorMode === 'dark' ? 'dark.300' : 'light.100'
                    }}
                    rightIcon={<FaArrowRight />}
                  >
                    Login
                  </Button>
                  <Link
                    marginTop="0.4em"
                  >
                    Or Sign Up
                  </Link>
              </Center>
            </FormControl>
          </Box>
          <Box>
            <Image></Image>
          </Box>
        </Flex>
      </Box>
    </Center>
  )
};

export default Home;
