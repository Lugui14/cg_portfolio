import { useAnimations, useGLTF } from "@react-three/drei";
import foxScene from "../assets/floating_fox.glb";
import { useEffect, useRef } from "react";

const Fox = (props) => {
  const ref = useRef();

  const { scene, animations } = useGLTF(foxScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Animation"].play();
  }, []);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Fox;
