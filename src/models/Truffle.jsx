import { useAnimations, useGLTF } from "@react-three/drei";
import truffleScene from "../assets/truffle_man.glb";
import { useEffect, useRef } from "react";

const Truffle = (props) => {
  const ref = useRef();

  const { scene, animations } = useGLTF(truffleScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Idle"].play();
  }, []);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Truffle;
