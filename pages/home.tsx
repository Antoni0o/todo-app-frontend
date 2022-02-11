import { Button, Image, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { Navbar } from '../src/components/Navbar';
import { useAuth } from '../src/hooks/useAuth';

const SignUp: NextPage = () => {
  const { signed, user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <Navbar user={user}/>
    </>
  )
};

export default SignUp;