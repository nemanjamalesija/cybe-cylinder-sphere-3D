import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import sphereTexture from '../images/sphereTexture.webp';
import { useState } from 'react';
import { Euler } from 'three';

type SphereGeometryArgs = {
  radius: number;
};

const sphereGeometryArgs: SphereGeometryArgs = {
  radius: 1,
};

const Sphere = () => {
  const [rotation, setRotation] = useState([0, 0, 0]);
  const colorMapSphere = useLoader(TextureLoader, sphereTexture);

  useFrame((state, delta) => {
    // Update the Y-axis rotation based on elapsed time
    setRotation([
      0,
      rotation[1] + delta * 0.8, // adjust the speed as desired
      0,
    ]);
  });

  return (
    <mesh position={[3, 0, 0]} rotation={new Euler(...rotation)}>
      <sphereBufferGeometry args={[...Object.values(sphereGeometryArgs)]} />
      <meshStandardMaterial map={colorMapSphere} />
    </mesh>
  );
};

export default Sphere;
