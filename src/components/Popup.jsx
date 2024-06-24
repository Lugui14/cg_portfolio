import {
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Heading,
} from "@chakra-ui/react";

const Popup = ({ title, children, display, setDisplay }) => {
  return (
    <Card
      zIndex={display ? 9999 : 0}
      position={"absolute"}
      top={300}
      right={120}
      minW={"30%"}
    >
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
  PopoverCloseButton;
};

export default Popup;
