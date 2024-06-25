/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useContext, useEffect, useRef } from "react";

import islandScene from "../assets/windmill.glb";
import { useFrame } from "@react-three/fiber";
import { MenuContext } from "../contexts/MenuContext";

export default function Island({ setDisplayPopup, ...props }) {
  const islandRef = useRef();
  const { rotation } = useContext(MenuContext);
  const { nodes, materials, animations } = useGLTF(islandScene);

  const { actions } = useAnimations(animations, islandRef);

  useEffect(() => {
    actions["Take 001"].play();
    islandRef.current.rotation.y = rotation - 0.1;
  }, [rotation]);

  useFrame(() => {
    if (props.isRotating) {
      islandRef.current.rotation.y -= Math.PI / 250;

      if (islandRef.current.rotation.y <= -Math.PI) {
        islandRef.current.rotation.y = Math.PI;
      }
    }

    if (islandRef.current.rotation.y >= -(Math.PI / 2) + Math.PI) {
      setDisplayPopup("about");
    } else if (
      islandRef.current.rotation.y <= -(Math.PI / 2) + Math.PI &&
      islandRef.current.rotation.y >= 0
    ) {
      setDisplayPopup("projects");
    } else if (
      islandRef.current.rotation.y <= 0 &&
      islandRef.current.rotation.y >= -3 * ((2 * Math.PI) / 4) + Math.PI
    ) {
      setDisplayPopup("technologies");
    } else {
      setDisplayPopup("contact");
    }
  });

  return (
    <a.group ref={islandRef} {...props} dispose={null}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group
            name="windmillfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <a.group name="Object_2">
              <a.group name="RootNode">
                <a.group name="base">
                  <mesh
                    name="base_lambert7_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.base_lambert7_0.geometry}
                    material={materials.lambert7}
                  />
                  <mesh
                    name="base_lambert8_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.base_lambert8_0.geometry}
                    material={materials.lambert8}
                  />
                  <a.group
                    name="shovel"
                    position={[-1.465, 1963.181, -323.593]}
                  >
                    <mesh
                      name="shovel_lambert3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.shovel_lambert3_0.geometry}
                      material={materials.lambert3}
                    />
                  </a.group>
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  );
}
