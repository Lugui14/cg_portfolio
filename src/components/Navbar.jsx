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
import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { handleSetRotation } = useContext(MenuContext);

  const handleRedirect = (path, rotation) => () => {
    navigate(path);

    if (path === "/") {
      handleSetRotation(rotation)();
    }
  };

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
      <Button
        boxShadow={"0px 10px 23px -17px rgba(0,0,0,0.75)"}
        rounded={16}
        backgroundColor={"white"}
        p={6}
        onClick={handleRedirect("/", 0)}
      >
        <Text fontSize={"xl"} fontWeight={"bold"} className="logo-text">
          PORTFOLIO
        </Text>
      </Button>
      <Menu>
        <MenuButton
          backgroundColor={"white"}
          boxShadow={"0px 10px 23px -17px rgba(0,0,0,0.75)"}
          p={6}
          rounded={16}
          as={Button}
          rightIcon={<ChevronDownIcon />}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize={"xl"} fontWeight={"bold"} className="logo-text">
            MENU
          </Text>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleRedirect("/", Math.PI)}>Sobre</MenuItem>
          <MenuItem onClick={handleRedirect("/", -Math.PI / 2 + Math.PI)}>
            Projetos
          </MenuItem>
          <MenuItem onClick={handleRedirect("/", 0)}>Tecnologias</MenuItem>
          <MenuItem
            onClick={handleRedirect("/contact", (2 * Math.PI) / -3 + Math.PI)}
          >
            Fale Comigo
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Navbar;
