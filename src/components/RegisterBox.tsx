import { Box, Center, Grid, GridItem, useColorMode } from "@chakra-ui/react";

import AuxProps from "../types/AuxProps";

const RegisterBox = ({ children, height }: AuxProps ) => {
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
          md: '400px',
          base: '750px'
        }}
        borderWidth='1px'
        borderRadius='lg'
        boxShadow= {colorMode === 'light' ? '0 0 4px 2px #efdfde' : ''}
      >
        <Grid
          h='100%'
          gridTemplateColumns={{
            xl: '40% 60%',
            md: '45% 55%',
            base: '100%'
          }}
          gridTemplateRows={{
            xl: '100%',
            md: '100%',
            base: '55% 45%'
          }}
        >
          {children}
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

export { RegisterBox };