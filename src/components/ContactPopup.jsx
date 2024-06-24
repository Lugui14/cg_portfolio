import { Button } from "@chakra-ui/react";
import Popup from "./Popup";

const ContactPopup = () => {
  return (
    <Popup
      title={"Contato"}
      position={"absolute"}
      top={"85%"}
      right={"50%"}
      transform={"translate(50%, -50%)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button>Contato</Button>
    </Popup>
  );
};

export default ContactPopup;
