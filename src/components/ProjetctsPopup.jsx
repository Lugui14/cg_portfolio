import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import Popup from "./Popup";
import { Box } from "@react-three/drei";

const ProjetctsPopup = () => {
  return (
    <Popup
      title={"Projetos"}
      position={"absolute"}
      top={400}
      left={120}
      w={"30vw"}
    >
      <Accordion allowToggle={true}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Eventos By Desbravador
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Projeto de sistema de gestão de eventos para a empresa Desbravador
            Web LTDA. Responsável por uma grande parte da minha jornada dentro
            da programação, sendo feito em JAVA com Spring Boot e ReactJS, além
            de utilizar Python para alguns microsserviços. O projeto continua
            sendo manutenído atualmente por mim juntamente a um tech lead.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                M8Gis
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Sistema GIS desenvolvido com propósito de fazer conexão com novos
            Leads de forma geográfica, definindo a localização de empresas da
            região Sul do Brasil e trazendo informações sobre elas. Desenvolvido
            usando ReactJS com a biblioteca Leaflet, e Python para as chamadas
            HTTP{" "}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Arromma Perfetto Café
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Sistema de gestão de empresa vendedora de grãos de café. Sistema
            desenvolvido por mim juntamento com outro desenvolvedor com o
            proposito de gerênciar os modulos de vendas, produtos, controle de
            estoque e de pessoas{" "}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Petrotrans - Sistema de Gestão de Frotas
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Sistema desenvolvido em PHP para gestão da empresa de transporte de
            cargas Petrotrans, o sistema consta modulo de gerenciamento de
            motoristas, veículos, cotas, viagens e financeiro.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                NLW HEAT
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Sistema de mensagens em tempo real desenvolvido durante a NLW HEAT
            da Rocketseat, utilizando NodeJS, ReactJS e React Native, além da
            biblioteca Socket.io para comunicação em tempo real.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                RentX
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Sistema backend de aluguel de carros desenvolvido durante o Ignite
            da Rocketseat, utilizando NodeJS, além de bibliotecas como Express,
            TypeORM e Jest.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Popup>
  );
};

export default ProjetctsPopup;
