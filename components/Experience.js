'use client';

import { useRef, useLayoutEffect, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppContext } from '@/context/AppContext';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const { setScrollProgress, setActiveSection, scrollTo, setScrollTo } = useAppContext();

  const mainGroup = useRef();
  const cameraGroup = useRef();
  const timeline = useRef();
  const scrollTriggerInstance = useRef();

  // Refs for animated objects
  const chaosParticles = useRef();
  const factoryLine = useRef();
  const portfolioGallery = useRef();
  const contactNode = useRef();

  // Effect to handle programmatic scrolling from HUD
  useEffect(() => {
    if (scrollTo && timeline.current) {
      const targetTime = timeline.current.labels[scrollTo];
      if (targetTime !== undefined) {
        const scrollHeight = document.querySelector('.scroll-container').scrollHeight;
        const clientHeight = window.innerHeight;
        const scrollPos = (targetTime / timeline.current.duration()) * (scrollHeight - clientHeight);
        
        window.scrollTo({ top: scrollPos, behavior: 'smooth' });
      }
      setScrollTo(null); // Reset after scrolling
    }
  }, [scrollTo, setScrollTo]);


  useLayoutEffect(() => {
    const camera = mainGroup.current.parent.camera;
    cameraGroup.current.add(camera);
    mainGroup.current.add(cameraGroup.current);

    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
        onCreated: (self) => (scrollTriggerInstance.current = self),
      },
    });

    // Add labels for sections and callbacks to update active section
    timeline.current.addLabel("intro", 0);
    timeline.current.call(() => setActiveSection('intro'), [], "intro");

    // --- PHASE 1: Chaos to Order ---
    timeline.current.to(
      chaosParticles.current.position,
      { x: 0, y: 0, z: 0, duration: 1 },
      "intro"
    ).to(
      chaosParticles.current.scale,
      { x: 0, y: 0, z: 0, duration: 1 },
      "intro"
    ).to(
      cameraGroup.current.position,
      { y: -5, duration: 1.5 },
      "intro"
    );

    timeline.current.addLabel("services", 1);
    timeline.current.call(() => setActiveSection('services'), [], "services");

    // --- PHASE 2: Processing Factory ---
    timeline.current.from(
      factoryLine.current.position,
      { x: 20, duration: 1 },
      "services"
    ).to(
      cameraGroup.current.position,
      { y: -15, duration: 1.5 },
      "services"
    );

    timeline.current.addLabel("work", 2);
    timeline.current.call(() => setActiveSection('work'), [], "work");

    // --- PHASE 3: Portfolio Gallery ---
    timeline.current.to(
      factoryLine.current.position,
      { x: -20, duration: 1 },
      "work"
    ).from(
      portfolioGallery.current.position,
      { y: -5, duration: 1 },
      "work"
    ).to(
      cameraGroup.current.position,
      { y: -25, duration: 1.5 },
      "work"
    );

    timeline.current.addLabel("contact", 3);
    timeline.current.call(() => setActiveSection('contact'), [], "contact");

    // --- PHASE 4: Contact ---
    timeline.current.to(
      portfolioGallery.current.position,
      { y: -10, duration: 1 },
      "contact"
    ).from(
      contactNode.current.scale,
      { x: 0, y: 0, z: 0, duration: 1 },
      3.5
    ).to(
      cameraGroup.current.position,
      { y: -35, duration: 1.5 },
      "contact"
    );

    // Cleanup function
    return () => {
      timeline.current?.kill();
      scrollTriggerInstance.current?.kill();
    };
  }, [setScrollProgress, setActiveSection]);

  // Pulsing grid animation
  useFrame(({ clock }) => {
    if (contactNode.current) {
      contactNode.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={mainGroup}>
      <group ref={cameraGroup}></group>
      <gridHelper args={[50, 50]} />

      {/* Phase 1: Chaos Particles */}
      <group ref={chaosParticles} position={[5, 2, 0]}>
        <Text position={[0, 2, 0]} fontSize={1.5} color="white" anchorX="center" anchorY="middle">
          We turn chaos into clarity.
        </Text>
        {Array.from({ length: 50 }).map((_, i) => (
          <Box key={i} args={[0.1, 0.1, 0.1]} position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 10]}>
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
          </Box>
        ))}
      </group>

      {/* Phase 2: Processing Factory */}
      <group ref={factoryLine} position={[0, -10, 0]}>
         <Text position={[0, 2, 0]} fontSize={1} color="white" anchorX="center" anchorY="middle">
          Design | Develop | Strategize
        </Text>
        <Box args={[5, 1, 2]} position={[0, 0, 0]}>
            <meshStandardMaterial wireframe color="#ff00ff" />
        </Box>
      </group>

      {/* Phase 3: Portfolio Gallery */}
      <group ref={portfolioGallery} position={[0, -20, 0]}>
         <Text position={[0, 2, 0]} fontSize={1} color="white" anchorX="center" anchorY="middle">
          Our Work
        </Text>
        <Box args={[1.5, 1.5, 1.5]} position={[-3, 0, 0]}>
            <meshStandardMaterial color="#ffff00" />
        </Box>
         <Box args={[1.5, 1.5, 1.5]} position={[3, 0, 0]}>
            <meshStandardMaterial color="#ffff00" />
        </Box>
      </group>

      {/* Phase 4: Contact */}
       <group ref={contactNode} position={[0, -30, 0]}>
         <Text position={[0, 2, 0]} fontSize={1.5} color="white" anchorX="center" anchorY="middle">
          Connect
        </Text>
        <Box args={[1, 1, 1]}>
            <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={3} />
        </Box>
      </group>

    </group>
  );
}
