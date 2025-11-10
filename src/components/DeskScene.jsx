// src/components/DeskScene.jsx

import { useRef } from "react";
import { useGLTF, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// --- Your Desk Model ---
const Desk = (props) => {
  // Make sure the path to your model is correct
  const { scene } = useGLTF("/assets/3d/desk.glb"); 
  
  return (
    <primitive 
      object={scene} 
      scale={1.5} // Adjust scale to fit your scene
      position={[0, -1, 0]} // Adjust position (e.g., -1 on Y to sit on the "floor")
      {...props} 
    />
  );
};

// --- Your Main Scene ---
const DeskScene = ({ isDarkMode }) => {
  const lightRef = useRef();

  // Animate the light color smoothly
  useFrame(() => {
    if (lightRef.current) {
      // This is a simple lerp (linear interpolation)
      // You can also use framer-motion for this
    }
  });

  return (
    <>
      {/* --- 1. LIGHTING --- */}
      
      {/* Ambient light for general illumination */}
      <ambientLight intensity={isDarkMode ? 0.1 : 0.5} />
      
      {/* Main directional light (like sun or room light) */}
      <directionalLight
        ref={lightRef}
        position={[5, 10, 5]}
        castShadow
        intensity={isDarkMode ? 0.3 : 1.5}
        color={isDarkMode ? '#aabbed' : '#ffffff'} // Cool blue for dark, white for light
      />
      
      {/* This adds a realistic sky and reflections */}
      <Environment preset={isDarkMode ? "night" : "sunset"} />

      {/* --- 2. MODELS --- */}
      <Desk />
      
      {/* TODO: 
      - Add your Developer model here
      - Add your Skill icons here
      - Add interactive elements (notepad, laptop)
      */}
    </>
  );
};

// This is crucial for loading GLTF models
useGLTF.preload("/models/desk.glb"); 

export default DeskScene;