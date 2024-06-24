import Popup from "./Popup";

const TechnologiesPopup = () => {
  return (
    <Popup
      title={"Tecnologias"}
      position={"absolute"}
      top={500}
      right={120}
      w={"30vw"}
    >
      <b>Olá, meu nome é Luiz Guilherme</b> <br /> <br /> Atualmente estou
      atualmente cursando Ciência da Computação da Universidade Federal da
      Fronteira Sul, na cidade de Chapecó e sou apaixonado por programação e
      tecnologia. Tenho experiência com serviços de desenvolvimento web e estou
      explorando novas áreas como programação blockchain e DevOps.
    </Popup>
  );
};

export default TechnologiesPopup;
