import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';
import { Stars } from '@react-three/drei/core';
import Sphere from './components/Sphere';
import { useRef } from 'react';
import { PerspectiveCamera } from 'three';
import './App.css';

type DirectionalLightProps = {
  position: [x: number, y: number, z: number];
  // Additional properties can be added here
};

function App() {
  const lightProps: DirectionalLightProps = {
    position: [-2, 5, 2],
    // Additional properties can be added here
  };

  return (
    <>
      <Canvas className='canvas'>
        <Stars />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight {...lightProps} intensity={1} />
      </Canvas>
    </>
  );
}

export default App;
