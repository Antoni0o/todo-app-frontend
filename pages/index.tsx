import { Box, Button, Center, FormControl, Grid, GridItem, Heading, Input, Link, useColorMode, useStyleConfig, Wrap } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FaArrowRight } from 'react-icons/fa';

import { ThemeSwitcher } from '../src/components/ThemeSwitcher';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <Center
      overflowY={{
        xl: 'hidden',
        base: 'scroll'
      }}
      w='100%'
      h={{
        xl: '100vh',
        md: '100vh',
        base: '100%'
      }}
    >
      <Box
        marginTop={{
          xl: '0',
          md: '0',
          base: '2em'
        }}
        marginBottom={{
          xl: '0',
          md: '0',
          base: '2em'
        }}
        width={{
          base: '90%',
          md: '90%',
          xl: '60%'
        }}
        height={{
          xl: '450px',
          md: '380px',
          base: '750px'
        }}
        borderWidth='1px'
        borderRadius='lg'
        boxShadow= {colorMode === 'light' ? '0 0 4px 2px #efdfde' : ''}
      >
        <Grid
          h='100%'
          gridTemplateColumns={{
            xl: '50% 50%',
            md: '40% 60%',
            base: '100%'
          }}
          gridTemplateRows={{
            xl: '100%',
            md: '100%',
            base: '55% 45%'
          }}
        >
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
                    width= '80%'
                    marginTop = '1em'
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
        </Grid>
      </Box>
    </Center>
  )
};

export default Home;
