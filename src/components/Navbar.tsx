import { Avatar, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Link, List, ListIcon, useColorMode, useDisclosure } from "@chakra-ui/react";
import { BsPencilSquare } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { useRef } from "react";

import { User } from "../types/User";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ListElement } from "./ListElement";
import { useAuth } from "../hooks/useAuth";

interface INavbarProps {
  user: User;
}

const Navbar = ({user}: INavbarProps) => {
  const { signOut } = useAuth();
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
          margin='0'
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

          <DrawerBody 
            padding='0'
          >
            <List>
              <ListElement>
                <ListIcon fontSize='1rem' as={BsPencilSquare}/>
                Edit Profile
              </ListElement>
              <Box 
                onClick={() => {
                  signOut()
                }}
              >
                <ListElement>
                  <ListIcon fontSize='1rem' as={FiLogOut} />
                  Logout
                </ListElement>
              </Box>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export { Navbar };