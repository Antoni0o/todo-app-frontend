import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {colorMode === 'dark' 
        ? <IconButton
            aria-label="dark"
            bg="transparent"
            fontSize="20px"
            _focus={{
              outline:'none'
            }}
            icon={
              <FaSun/>
            }
            onClick={toggleColorMode}
          />
        : <IconButton
            aria-label="light"
            bg="transparent"
            fontSize="20px"
            _focus={{
              outline:'none'
            }}
            icon={
              <FaMoon/>
            }
            onClick={toggleColorMode}
          />
      }
    </>
  );
};

export { ThemeSwitcher };