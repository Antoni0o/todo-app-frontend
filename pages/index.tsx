import { Box, Button, Text, useColorMode } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Box>
      <Text>Teste</Text>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  )
}

export default Home
