import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ContactPopup = () => {
  const navigate = useNavigate();

  return (
    <Button
      zIndex={9999}
      position={"absolute"}
      top={"85%"}
      right={"50%"}
      transform={"translate(50%, -50%)"}
      backgroundColor={"white"}
      boxShadow={"0px 10px 23px -17px rgba(0,0,0,0.75)"}
      rounded={16}
      w={64}
      h={24}
      onClick={() => navigate("/contact")}
    >
      <Text fontSize={"3xl"} fontWeight={"bold"} className="logo-text">
        Fale Comigo!
      </Text>
    </Button>
  );
};

export default ContactPopup;
