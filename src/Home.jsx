import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Island from "./models/Island";
import { Html } from "@react-three/drei";
import Sky from "./models/Sky";
import Plane from "./models/Plane";

const Loading = () => (
  <Html>
    <span>...Loading</span>
  </Html>
);

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

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

          <Sky position={[-200, 0, 0]} />
          <Plane
            position={[0, 1, -1]}
            rotation={[0.3, Math.PI / 2.6, 0.4]}
            scale={[1.7, 1.7, 1.7]}
            isRotating={isRotating}
          />
          <Island
            position={[-2, -5, -40]}
            scale={[0.14, 0.11, 0.11]}
            rotation={[Math.PI / 2 + 0.2, Math.PI, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
