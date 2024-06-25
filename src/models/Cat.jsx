import { useAnimations, useGLTF } from "@react-three/drei";
import catScene from "../assets/behemot_cat.glb";
import { useEffect, useRef } from "react";

const Cat = (props) => {
  const ref = useRef();

  const { scene, animations } = useGLTF(catScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Lantern"].play();
  }, []);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Cat;
