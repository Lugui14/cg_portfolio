import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/plane.glb";
import { useEffect, useRef } from "react";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [isRotating]);

  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
