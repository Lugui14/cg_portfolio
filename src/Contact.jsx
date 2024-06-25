import { HStack, Heading, VStack } from "@chakra-ui/react";
import Cat from "./models/Cat";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Fox from "./models/Fox";
import Truffle from "./models/Truffle";
import ContactForm from "./components/ContactForm";
import { OrbitControls } from "@react-three/drei";

const Contact = () => {
  return (
    <HStack
      h={"90vh"}
      mt={"10vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack h={"100%"} w={{ base: 0, md: "33.3vw" }}>
        <VStack h={"50%"} w={"100%"} alignContent={"center"}>
          <Canvas
            style={{ height: "100%", width: "100%" }}
            camera={{ near: 0.1, far: 1000 }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <hemisphereLight
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={1}
              />
              <Cat scale={[0.5, 0.5, 0.5]} position={[0, -1.2, 0]} />
            </Suspense>
          </Canvas>
        </VStack>
        <VStack
          h={"50%"}
          w={"100%"}
          justifyContent={"flex-end"}
          alignContent={"center"}
        >
          <Canvas
            style={{ height: "100%", width: "100%" }}
            camera={{ near: 0.1, far: 1000 }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <hemisphereLight
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={1}
              />
              <Fox scale={[0.7, 0.7, 0.7]} />
              <OrbitControls enableRotate={true} enableZoom={false} />
            </Suspense>
          </Canvas>
        </VStack>
      </VStack>
      <VStack
        justifyContent={"center"}
        alignContent={"center"}
        w={{ base: "80%", md: "33.3vw" }}
        h={{ base: "100%", md: "60%" }}
      >
        <Heading as={"h1"}>Envie um Email</Heading>
        <ContactForm />
      </VStack>
      <VStack
        h={"100%"}
        justifyContent={"center"}
        alignContent={"center"}
        w={{ base: 0, md: "33.3vw" }}
      >
        <Canvas
          style={{ height: "100%", width: "100%" }}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />
            <Truffle scale={[2, 2, 2]} position={[0, -1, 0]} />
            <OrbitControls enableRotate={true} enableZoom={false} />
          </Suspense>
        </Canvas>
      </VStack>
    </HStack>
  );
};

export default Contact;
