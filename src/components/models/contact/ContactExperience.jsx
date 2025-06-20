import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import Computer from "../Computer.jsx";

const ContactExperience = () => {
  const lights = useMemo(() => (
    <>
      <ambientLight intensity={0.4} color="#fff4e6" />
      <directionalLight
        position={[5, 5, 3]}
        intensity={1.5}
        color="#ffd9b3"
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
    </>
  ), []);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 7], fov: 45 }}
      gl={{ antialias: false, toneMappingExposure: 1 }}
    >
      {/* Lights */}
      {lights}

      {/* Orbit Controls */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Ground */}
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#a46b2d" />
      </mesh>

      {/* 3D Model */}
      <Suspense fallback={null}>
        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <Computer />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;