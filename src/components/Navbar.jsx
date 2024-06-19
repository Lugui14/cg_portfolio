import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack
      w={"100vw"}
      py={6}
      px={12}
      justifyContent={"space-between"}
      alignItems={"center"}
      zIndex={9999}
      position={"fixed"}
      backgroundColor={"transparent"}
    >
      <Box
        boxShadow={"0px 10px 23px -17px rgba(0,0,0,0.75)"}
        rounded={16}
        backgroundColor={"white"}
        p={3}
      >
        <Text fontSize={"xl"} fontWeight={"bold"} className="logo-text">
          PORTFOLIO
        </Text>
      </Box>
      <Menu>
        <MenuButton
          backgroundColor={"white"}
          boxShadow={"0px 10px 23px -17px rgba(0,0,0,0.75)"}
          p={6}
          rounded={16}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          <Text fontSize={"xl"} fontWeight={"bold"} className="logo-text">
            MENU
          </Text>
        </MenuButton>
        <MenuList>
          <MenuItem>Sobre</MenuItem>
          <MenuItem>Projetos</MenuItem>
          <MenuItem>Tecnologias</MenuItem>
          <MenuItem>Fale Comigo</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Navbar;
