import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/sky.glb";

const Sky = ({ ...props }) => {
  const sky = useGLTF(skyScene);

  return (
    <mesh {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
