import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles';

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  // // Fallback image for mobile/tablet
  // if (isTablet) {
  //   return (
  //     <div className="w-full h-[400px] flex justify-center items-center overflow-hidden">
  //       <img
  //         src="/images/profile.png" // your image path
  //         alt="Hero fallback"
  //         className="object-cover w-full h-full"
  //         loading="lazy"
  //       />
  //     </div>
  //   );
  // }


  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 1.5]} // limit pixel density for performance
      frameloop="demand" // only render on changes or user interaction
      gl={{ antialias: false, powerPreference: 'low-power' }} // better battery & less lag
    >
      {!isMobile && (
        <OrbitControls
          enableZoom={!isTablet}
          enablePan={false}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
      )}

      <HeroLights />

      {/* Optional: use fewer particles on mobile */}
      {/* <Particles count={isMobile ? 30 : 80} /> */}

      <Suspense fallback={null}>
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;