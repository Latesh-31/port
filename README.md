# The Living Blueprint: An Interactive Portfolio

This repository contains the source code for a unique, interactive portfolio built with Next.js, React Three Fiber, and GSAP. The concept is to show, not just tell, how ideas are transformed from chaos to clarity through a scroll-based, 3D animated journey.

## The Concept: "The Living Blueprint"

Instead of a traditional portfolio, this website is a 3D interactive blueprint that assembles itself in real-time as the user scrolls. It visualizes the process from "Chaos" (the client's problem) to "Order" (the final solution).

-   **Style**: Isometric 3D (viewed from a top-down angle).
-   **Aesthetic**: "Glassmorphism" meets "Wireframe." Glowing neon lines, frosted glass textures, and sleek metallic surfaces.
-   **Environment**: An infinite grid that pulses with data.

## The User Journey (Scroll-Based Animation)

1.  **Phase 1: The Input (Hero)** - Chaotic particles representing raw ideas snap into an ordered grid on scroll.
2.  **Phase 2: The Processing (Services)** - The grid transforms into a digital factory line, where objects are designed, developed, and strategized.
3.  **Phase 3: The Output (Portfolio)** - The factory releases finished 3D artifacts representing projects, which can be inspected and interacted with.
4.  **Phase 4: Connection (Contact)** - All visual lines converge on a single, interactive contact point.

## Tech Stack

-   **Framework**: Next.js (React)
-   **3D Engine**: Three.js / React Three Fiber (R3F)
-   **Animation**: GSAP (GreenSock) with ScrollTrigger
-   **Shaders**: GLSL (for custom visual effects)
-   **(Optional) Physics**: Rapier

## Getting Started

First, install the dependencies:

bash
npm install
# or
yarn install
# or
pnpm install


Then, run the development server:

bash
npm run dev
# or
yarn dev
# or
pnpm dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
