import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/cartoon_plane.glb";
import { useEffect, useRef } from "react";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();

  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Main"].play();
    } else {
      actions["Main"].stop();
    }
  }, [isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
