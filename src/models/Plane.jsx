import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/cartoon_plane.glb";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const [rotationDir, setRotationDir] = useState("right");

  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Main"].play();
    } else {
      actions["Main"].stop();
    }
  }, [isRotating]);

  useFrame(() => {
    if (isRotating) {
      if (rotationDir === "right") {
        ref.current.rotation.z += 0.005;
      } else {
        ref.current.rotation.z -= 0.005;
      }

      if (ref.current.rotation.z >= 0.3) {
        setRotationDir("left");
      } else if (ref.current.rotation.z <= -0.3) {
        setRotationDir("right");
      }
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
