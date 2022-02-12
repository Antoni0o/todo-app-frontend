import { ListItem } from "@chakra-ui/react";
import AuxProps from "../types/AuxProps";

const ListElement = ({ children }: AuxProps) => {
  return (
    <ListItem
      display='flex'
      alignItems='center'
      justifyContent='start'
      gap='6px'
      cursor='pointer'
      padding='16px 24px'
      _hover={{
        backgroundColor: 'blue.200',
        
      }}
    >
      {children}
    </ListItem>
  );
};

export { ListElement };