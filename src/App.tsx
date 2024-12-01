// src/App.tsx
import React, { useState } from "react";
import RepoList from "./RepoList";
import ParticleCanvas from "./ParticleCanvas";
import SettingsSidebar from "./SettingsSidebar";

const App: React.FC = () => {
  const [isParticlesActive, setIsParticlesActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [colorPalette, setColorPalette] = useState("matrix");

  const toggleParticles = () => {
    setIsParticlesActive(!isParticlesActive);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <ParticleCanvas isActive={isParticlesActive} colorPalette={colorPalette} />
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <h1 className="text-4xl font-bold mb-8 mt-8 text-center">Welcome to my GitHub page</h1>
        <RepoList />
      </div>
      <SettingsSidebar
        isActive={isParticlesActive}
        toggleParticles={toggleParticles}
        isOpen={isSidebarOpen}
        colorPalette={colorPalette}
        setColorPalette={setColorPalette}
      />
      <button
        onClick={toggleSidebar}
        className={`absolute top-1/2 right-0 z-50 ${
          isSidebarOpen ? "bg-neon-green" : "bg-gray-500"
        } text-white p-2 flex flex-col items-center transform -translate-y-1/2 rounded-l`}
      >
        <span>S</span>
        <span>E</span>
        <span>T</span>
        <span>T</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>S</span>
      </button>
    </div>
  );
};

export default App;
