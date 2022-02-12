import { Avatar, AvatarBadge, Button, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useColorMode, useDisclosure } from "@chakra-ui/react";
import { BsPencilFill } from 'react-icons/bs'
import { useRef } from "react";

import { User } from "../types/User";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface INavbarProps {
  user: User;
}

const Navbar = ({user}: INavbarProps) => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const avatarRef = useRef<HTMLImageElement>(null);

  return (
    <Flex
      margin='10px 20px' 
      justifyContent='end'
      alignItems='center'
      gap='10px'
    >
      <ThemeSwitcher />
      <Avatar 
        ref={avatarRef} 
        name={user.name} 
        src={user.avatar_url} 
        onClick={onOpen} 
        cursor='pointer' 
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={avatarRef}
        placement='right'
      >
        <DrawerOverlay />
        <DrawerContent
          bg='blue.100'
          color='light.100'
        >
          <DrawerCloseButton 
            marginTop='10px'
          />
          <Flex
            margin='10px 20px' 
            justifyContent='start'
            alignItems='center'
          >
            <Avatar 
              name={user.name} 
              src={user.avatar_url} 
            />
            <DrawerHeader>{user.name}</DrawerHeader> 
          </Flex>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export { Navbar };