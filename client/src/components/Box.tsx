import React, { useRef, useState } from 'react';
import textureBox from '../images/textureBox.jpg';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Euler } from 'three';

type BoxGeometryArgs = {
  width: number;
  height: number;
  depth: number;
};

const geometryArgs: BoxGeometryArgs = {
  width: 1.8,
  height: 1.8,
  depth: 1.8,
};

const Box = () => {
  const colorMapBox = useLoader(TextureLoader, textureBox);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame((state, delta) => {
    // Update the Y-axis rotation based on elapsed time
    setRotation([
      0,
      rotation[1] + delta * 0.8, // adjust the speed as desired
      0,
    ]);
  });

  return (
    <mesh rotation={new Euler(...rotation)} position={[-1, 0, 0]}>
      <boxBufferGeometry
        attach='geometry'
        args={[...Object.values(geometryArgs)]}
      />
      <meshStandardMaterial map={colorMapBox} />
    </mesh>
  );
};

export default Box;
