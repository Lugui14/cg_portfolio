import {
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Popup = ({ title, children, ...props }) => {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setDisplay(true);
  }, [title]);

  return (
    <Card zIndex={display ? 9999 : 0} {...props}>
      <CardHeader
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading size="md">{title}</Heading>
        <CloseButton
          onClick={() => {
            setDisplay(false);
          }}
        />
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default Popup;
