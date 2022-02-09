import { Button, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useAuth } from '../src/hooks/useAuth';

const SignUp: NextPage = () => {
  const { user, signOut } = useAuth();
  console.log(user)

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <Text>home</Text>
      <Button 
      onClick={(e) => {
        e.preventDefault();
        handleSignOut();
      }}>Logout</Button>
    </>
  )
};

export default SignUp;