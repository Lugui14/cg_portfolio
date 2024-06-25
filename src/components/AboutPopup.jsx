import Popup from "./Popup";

const AboutPopup = () => {
  return (
    <Popup
      title={"Sobre"}
      position={"absolute"}
      top={{ base: "50%", md: 300 }}
      right={{ base: "50%", md: 120 }}
      w={{ base: "80vw", md: "30vw" }}
      transform={{ base: "translate(50%, -50%)", md: "none" }}
    >
      <b>Olá, meu nome é Luiz Guilherme</b> <br /> <br /> Atualmente estou
      atualmente cursando Ciência da Computação da Universidade Federal da
      Fronteira Sul, na cidade de Chapecó e sou apaixonado por programação e
      tecnologia. Tenho experiência com serviços de desenvolvimento web e estou
      explorando novas áreas como programação blockchain e DevOps.
    </Popup>
  );
};

export default AboutPopup;
