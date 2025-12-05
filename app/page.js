import { Suspense } from 'react';
import Scene from '@/components/Scene';
import HUD from '@/components/hud/HUD';

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <HUD />
      <Suspense fallback={<div>Loading...</div>}>
        <Scene />
      </Suspense>
       {/* This div is used to create a scrollable area to trigger animations */}
      <div className="scroll-container"></div>
    </main>
  );
}
