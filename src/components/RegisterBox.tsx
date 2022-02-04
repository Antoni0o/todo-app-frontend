import { Box, Center, Grid, useColorMode } from "@chakra-ui/react";

import AuxProps from "../types/AuxProps";

const RegisterBox = ({ children }: AuxProps ) => {
  const { colorMode } = useColorMode();

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
          {children}
        </Grid>
      </Box>
    </Center>
  )
};

export { RegisterBox };