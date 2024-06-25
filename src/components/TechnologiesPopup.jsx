import {
  Grid,
  GridItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Popup from "./Popup";
import { useState } from "react";

const techs = {
  java: {
    title: "Java",
    description:
      "Usei Java em boa parte de minha experiência como programador, principalmente dentro da empresa Desbravador Web LTDA, onde entendi o framework SpringBoot e utilizo atualmente para desenvolver o sistema de Eventos dentro da empresa.",
  },
  react: {
    title: "React",
    description:
      "React é uma biblioteca JavaScript para criar interfaces de usuário, é a tecnologia qual possuo mais experiência e a que mais uso atualmente, tanto no trabalho quanto em projetos pessoais.",
  },
  postgres: {
    title: "PostgreSQL",
    description:
      "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, é o banco de dados que mais utilizei até hoje, sendo um banco de dados open-source e muito poderoso, é uma ótima escolha para a maioria dos projetos.",
  },
  node: {
    title: "Node.js",
    description:
      "Node.js é um ambiente de execução JavaScript que permite executar código JavaScript no backend, utilizei em alguns projetos pessoais, principalmente para criar APIs REST.",
  },
  python: {
    title: "Python",
    description:
      "Python é uma linguagem de programação de alto nível, por ser possível utiliza-la para diversas aplicações, escolhi ela para desenvolver o projeto de um GIS para a empresa M8 Sistemas",
  },
  docker: {
    title: "Docker",
    description:
      "Docker é uma plataforma de código aberto que facilita a criação, implantação e execução de aplicativos em contêineres, utilizei em alguns projetos pessoais e no trabalho para facilitar a execução de serviços.",
  },
};

const TechnologiesPopup = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const { isOpen, onToggle, onClose } = useDisclosure();

  const placement = useBreakpointValue({ base: "top", md: "left" });

  const handleMouseOver = (tech) => () => {
    setSelectedTech(tech);
    onToggle();
  };

  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      placement={placement}
      closeOnBlur={false}
    >
      <Popup
        title={"Tecnologias"}
        position={"absolute"}
        top={{ base: "70%", md: 500 }}
        right={{ base: "50%", md: 120 }}
        w={{ base: "80vw", md: "30vw" }}
        transform={{ base: "translate(50%, -50%)", md: "none" }}
      >
        <PopoverTrigger>
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            <GridItem
              colSpan={1}
              w={"100%"}
              onMouseEnter={handleMouseOver("java")}
              onClick={handleMouseOver("java")}
              onMouseLeave={onClose}
              cursor={"pointer"}
            >
              <img
                style={{ width: "80%", height: "80%" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              />
            </GridItem>
            <GridItem
              colSpan={1}
              w={"100%"}
              onMouseEnter={handleMouseOver("react")}
              onClick={handleMouseOver("react")}
              onMouseLeave={onClose}
              cursor={"pointer"}
            >
              <img
                style={{ width: "80%", height: "80%" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              />
            </GridItem>
            <GridItem
              colSpan={1}
              w={"100%"}
              onMouseEnter={handleMouseOver("postgres")}
              onClick={handleMouseOver("postgres")}
              onMouseLeave={onClose}
              cursor={"pointer"}
            >
              <img
                style={{ width: "80%", height: "80%" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              />
            </GridItem>
            <GridItem
              colSpan={1}
              w={"100%"}
              onMouseEnter={handleMouseOver("node")}
              onClick={handleMouseOver("node")}
              onMouseLeave={onClose}
              cursor={"pointer"}
            >
              <img
                style={{ width: "80%", height: "80%" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              />
            </GridItem>
            <GridItem
              colSpan={1}
              w={"100%"}
              onMouseEnter={handleMouseOver("python")}
              onClick={handleMouseOver("python")}
              onMouseLeave={onClose}
              cursor={"pointer"}
            >
              <img
                style={{ width: "80%", height: "80%" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              />
            </GridItem>
            <GridItem
              colSpan={1}
              w={"100%"}
              onMouseEnter={handleMouseOver("docker")}
              onClick={handleMouseOver("docker")}
              onMouseLeave={onClose}
              cursor={"pointer"}
            >
              <img
                style={{ width: "80%", height: "80%" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
              />
            </GridItem>
          </Grid>
        </PopoverTrigger>
      </Popup>
      <PopoverContent
        p={4}
        right={{ base: 0, md: 8 }}
        bottom={{ base: 24, md: 16 }}
      >
        <PopoverHeader fontWeight={"semibold"}>
          {" "}
          {techs[selectedTech]?.title || ""}{" "}
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>{techs[selectedTech]?.description || ""}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TechnologiesPopup;
