/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useRef } from "react";

import islandScene from "../assets/island.glb";
import { useFrame } from "@react-three/fiber";

export default function Island(props) {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);

  useFrame(() => {
    if (props.isRotating) {
      islandRef.current.rotation.z -= 0.01;
    }
  });

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
      />
    </a.group>
  );
}
