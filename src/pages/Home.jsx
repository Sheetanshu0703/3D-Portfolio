import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [biplaneScale, setBiplaneScale] = useState([3, 3, 3]);
  const [biplanePosition, setBiplanePosition] = useState([0, -4, -4]);
  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState([0, -6.5, -43.4]);

  // 🔊 Music Control
  useEffect(() => {
    const audio = audioRef.current;
    if (isPlayingMusic) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlayingMusic]);

  // 🎯 Adjust 3D Model Sizes
  const adjustModelsForScreenSize = () => {
    if (window.innerWidth < 768) {
      // Mobile
      setBiplaneScale([1.2, 1.2, 1.2]);
      setBiplanePosition([0, -1.8, -2.5]);
      setIslandScale([0.7, 0.7, 0.7]);
      setIslandPosition([0, -6.5, -50]);
    } else {
      // Desktop
      setBiplaneScale([3, 3, 3]);
      setBiplanePosition([0, -4, -4]);
      setIslandScale([1, 1, 1]);
      setIslandPosition([0, -6.5, -43.4]);
    }
  };

  // 🪄 Adjust when loaded or resized
  useEffect(() => {
    adjustModelsForScreenSize();
    window.addEventListener("resize", adjustModelsForScreenSize);
    return () => window.removeEventListener("resize", adjustModelsForScreenSize);
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* 🏠 Floating Info Text */}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* 🌌 3D Scene */}
      <Canvas
        className={`w-full h-screen bg-transparent transition-all duration-500 ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lights */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          {/* Models */}
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      {/* 🎵 Music Toggle Icon */}
      <div className="absolute bottom-6 left-6 sm:bottom-4 sm:left-4 z-20 flex items-center justify-center">
        <div
          className={`relative w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 ${
            isPlayingMusic
              ? "bg-blue-500/20 animate-pulse ring-2 ring-blue-400"
              : "bg-slate-800/40 hover:bg-slate-700/40"
          }`}
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        >
          <img
            src={!isPlayingMusic ? soundoff : soundon}
            alt="jukebox"
            className={`w-8 h-8 sm:w-7 sm:h-7 object-contain transition-transform duration-300 ${
              isPlayingMusic ? "scale-110 brightness-110" : "opacity-80"
            }`}
          />
          {/* Glow effect */}
          {isPlayingMusic && (
            <span className="absolute inset-0 rounded-full bg-blue-500/20 blur-md animate-ping" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
