import { Canvas } from "@react-three/fiber";
import TableTop from "./TableTop";
import { Suspense, useState, useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

const AnimatedCamera = animated(PerspectiveCamera);

const textures = [
  "PavingStones088_1K",
  "PavingStones089_1K",
  "PavingStones091_1K",
  "PavingStones092_1K",
  "PavingStones093_1K"
];

export default function App() {
  const [texture, setTexture] = useState("PavingStones091_1K");
 const cameraRef = useRef();
  const [position, setPosition] = useState([0, 3, -12]);
  const props = useSpring({
    from: {
      position: cameraRef.current
        ? [
            cameraRef.current.position.x,
            cameraRef.current.position.y,
            cameraRef.current.position.z
          ]
        : [0, 3, -12]
    },
    to: { position },
    reset: true
  });

  return (
    <div className="container">
      {textures.map((texture, i) => (
        <button key={i} onClick={() => setTexture(texture)}>
          Textur {i + 1}
        </button>
      ))}
      <br />
      <button
        onClick={() => {
          setPosition([0, 1, -12]);
        }}
      >
        Front
      </button>
      <button
        onClick={() => {
          setPosition([5, 5, -9]);
        }}
      >
        Perspektive
      </button>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight />
          <TableTop texture={texture} />
          <AnimatedCamera
            makeDefault
            ref={cameraRef}
            position={props.position}
          />
          <OrbitControls camera={cameraRef.current} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// make texture transparent or something on hover
// different textures on different sides of the table top
// rounded and flattened corners on the table top
// add a zoom value
// change sizes
// add several Platten
// limit camera movements
// Massstaebe at all, plus jumping
