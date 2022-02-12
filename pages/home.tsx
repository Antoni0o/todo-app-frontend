import { Button, Image, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Navbar } from '../src/components/Navbar';
import { useAuth } from '../src/hooks/useAuth';

const HomePage: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!user?.id) {
      router.push('/404');
    }
  }, [])

  return (
    <>
      {user?.id &&
        <Navbar user={user} />
      }
    </>
  );

};

export default HomePage;