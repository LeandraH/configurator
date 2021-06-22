import React from "react";
import { useTexture } from "@react-three/drei";

const TableTop = ({ texture }) => {
  const [
    colorMap,
    displacementMap,
    normalMap,
    roughnessMap,
    aoMap
  ] = useTexture([
    `${texture}_Color.jpg`,
    `${texture}_Displacement.jpg`,
    `${texture}_Normal.jpg`,
    `${texture}_Roughness.jpg`,
    `${texture}_AmbientOcclusion.jpg`
  ]);
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[10, 1, 5]} />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        displacementScale={0}
      />
    </mesh>
  );
};

export default TableTop;
