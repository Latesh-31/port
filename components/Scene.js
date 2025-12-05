'use client';

import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import { PerspectiveCamera } from '@react-three/drei';

export default function Scene() {
  return (
    <Canvas className="webgl">
      <PerspectiveCamera makeDefault position={[0, 5, 15]} fov={60} />
      <Experience />
    </Canvas>
  );
}
