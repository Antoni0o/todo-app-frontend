import { Box, Button, Center, FormControl, Grid, GridItem, Heading, Input, Link, useColorMode, useStyleConfig, Wrap } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FaArrowRight } from 'react-icons/fa';
import { LoginContent } from '../src/components/LoginContent';

import { ThemeSwitcher } from '../src/components/ThemeSwitcher';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <LoginContent/>          
  )
};

export default Home;
