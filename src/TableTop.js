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
    <mesh>
      <boxGeometry args={[10, 1, 5]} />
      <meshStandardMaterial color='saddlebrown' attachArray='material' />
      <meshStandardMaterial color='saddlebrown' attachArray='material' />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        displacementScale={0}
        attachArray='material'
      />
      <meshStandardMaterial color='saddlebrown' attachArray='material' />
      <meshStandardMaterial color='saddlebrown' attachArray='material' />
      <meshStandardMaterial color='saddlebrown' attachArray='material' />
    </mesh>
  );
};

export default TableTop;
