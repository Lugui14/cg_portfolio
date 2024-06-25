import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Island from "./models/Island";
import { Html, OrbitControls, Stats } from "@react-three/drei";
import Sky from "./models/Sky";
import Plane from "./models/Plane";
import AboutPopup from "./components/AboutPopup";
import ProjetctsPopup from "./components/ProjetctsPopup";
import TechnologiesPopup from "./components/TechnologiesPopup";
import ContactPopup from "./components/ContactPopup";

const Loading = () => (
  <Html>
    <span>...Loading</span>
  </Html>
);

const popups = {
  about: <AboutPopup />,
  projects: <ProjetctsPopup />,
  technologies: <TechnologiesPopup />,
  contact: <ContactPopup />,
};

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(null);

  window.onkeydown = (e) => {
    if (e.key === "ArrowRight") {
      setIsRotating(true);
    }
  };

  window.onkeyup = (e) => {
    if (e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  return (
    <section style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {popups[displayPopup]}

      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "transparent",
        }}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loading />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Sky position={[-200, 0, 0]} isRotating={isRotating} />
          <Plane
            position={[0, 0, 0]}
            rotation={[0.3, Math.PI / 2.6, 0.3]}
            scale={[0.8, 0.8, 0.8]}
            isRotating={isRotating}
          />
          <Island
            position={[0, -2, -5]}
            rotation={[0, Math.PI, 0]}
            scale={[0.2, 0.2, 0.2]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setDisplayPopup={setDisplayPopup}
          />
          <OrbitControls
            enableZoom={true}
            enableRotate={true}
            maxZoom={10}
            minZoom={0.01}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
