import { Divider, Flex, Heading } from "@chakra-ui/react";
import AuxProps from "../types/AuxProps";
import { TodosBox } from "./TodosBox";

const HomeBody = () => {
  return (
    <Flex
      width='100%'
      flexDirection='column'
      padding={{
        lg: '1rem 5rem',
        md: '1rem 5rem',
        base: '2rem'
      }}
      overflow='hidden'
    >
      <Heading
        fontSize='3rem'
      >To-do&apos;s</Heading>
      <Divider 
        width='30%'
        marginTop='1rem'
        borderColor='dark.300'
      />
      <TodosBox />
    </Flex>
  );
};

export { HomeBody };