import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/sky.glb";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Sky = (props) => {
  const skyRef = useRef();
  const sky = useGLTF(skyScene);

  useFrame(() => {
    if (props.isRotating) {
      skyRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh {...props} ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
