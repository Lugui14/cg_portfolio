/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useContext, useEffect, useRef } from "react";

import islandScene from "../assets/island.glb";
import { useFrame } from "@react-three/fiber";
import { MenuContext } from "../contexts/MenuContext";

export default function Island({ setDisplayPopup, ...props }) {
  const islandRef = useRef();
  const { rotation } = useContext(MenuContext);
  const { nodes, materials } = useGLTF(islandScene);

  useEffect(() => {
    islandRef.current.rotation.y = rotation - 0.1;
  }, [rotation]);

  useFrame(() => {
    if (props.isRotating) {
      islandRef.current.rotation.y -= Math.PI / 200;

      if (islandRef.current.rotation.y <= -Math.PI * 2) {
        islandRef.current.rotation.y = 0;
      }
    }

    if (islandRef.current.rotation.y >= -(Math.PI / 2)) {
      setDisplayPopup("about");
    } else if (
      islandRef.current.rotation.y <= -(Math.PI / 2) &&
      islandRef.current.rotation.y >= -Math.PI
    ) {
      setDisplayPopup("projects");
    } else if (
      islandRef.current.rotation.y <= -Math.PI &&
      islandRef.current.rotation.y >= -3 * ((2 * Math.PI) / 4)
    ) {
      setDisplayPopup("technologies");
    } else {
      setDisplayPopup("contact");
    }
  });

  return (
    <a.group {...props} ref={islandRef}>
      <a.group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.BALOON}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.BALOON_BULB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.BALOON_CURVE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.DROPS_PIPE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.ISLAND_BASE_SHADOW}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.base_island_additional_pipes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["base_island_additional_pipes_BEAM.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.base_island_additional_pipes_transarent}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.curve_Pipe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.island_Connector_CURVE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.island_Metal_holders}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.machine_MAIN}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.machine_REACTOR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.machine_REACTOR_transparent}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.machine_RENTGEN}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.machine_TELEPORT_flash}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.machine_TELEPORT_transparent}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.sphere}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.ISLAND_BASE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.ISLAND_BASE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.machine_PRINTER}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.machine_PRINTER}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.machine_TELEPORT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.machine_TELEPORT}
        />
      </a.group>
    </a.group>
  );
}
