// src/App.tsx
import React, { useState } from "react";
import RepoList from "./RepoList";
import ParticleCanvas from "./ParticleCanvas";
import SettingsSidebar from "./SettingsSidebar";

const App: React.FC = () => {
  const [isParticlesActive, setIsParticlesActive] = useState(false);

  const toggleParticles = () => {
    setIsParticlesActive(!isParticlesActive);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <ParticleCanvas isActive={isParticlesActive} />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 mt-8 text-center">Welcome to my GitHub page</h1>
        <RepoList />
      </div>
      <SettingsSidebar isActive={isParticlesActive} toggleParticles={toggleParticles} />
    </div>
  );
};

export default App;
