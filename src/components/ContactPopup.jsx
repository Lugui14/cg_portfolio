import { Button, Text } from "@chakra-ui/react";
import Popup from "./Popup";

const ContactPopup = () => {
  return (
    <Popup
      position={"absolute"}
      top={"85%"}
      right={"50%"}
      transform={"translate(50%, -50%)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button
        backgroundColor={"white"}
        boxShadow={"0px 10px 23px -17px rgba(0,0,0,0.75)"}
        p={6}
        rounded={16}
        w={48}
        h={16}
        border={'1px solid rgba(0,0,0,0.10)'}
      >
        {" "}
        <Text fontSize={"xl"} fontWeight={"bold"} className="logo-text">
          Fale Comigo!
        </Text>
      </Button>
    </Popup>
  );
};

export default ContactPopup;
