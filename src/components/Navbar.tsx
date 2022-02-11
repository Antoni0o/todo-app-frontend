import { Avatar, Button, Drawer, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { User } from "../types/User";

interface INavbarProps {
  user: User;
}

const Navbar = ({user}: INavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const avatarRef = useRef<HTMLImageElement>(null);

  return (
    <>
      <Avatar ref={avatarRef} name={user.name} src={user.avatar_url} onClick={onOpen}/>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={avatarRef}
        placement='right'
      >
        <DrawerOverlay />
        <DrawerContent>
          <Avatar name={user.name} src={user.avatar_url} />
          <DrawerHeader>{user.name}</DrawerHeader> 
        </DrawerContent>
      </Drawer>
    </>
  );
}

export { Navbar };