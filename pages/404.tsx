import { Button, Image, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Image alt='not found wallpaper' src='https://p4.wallpaperbetter.com/wallpaper/198/872/888/minimalism-404-not-found-numbers-simple-background-wallpaper-thumb.jpg'></Image>
      <Text>404 - Not Found</Text>
      <Button 
      onClick={(e) => {
        e.preventDefault();
        router.push('/');
      }}
      >
        Return
      </Button>
    </>
  );

};

export default NotFound;