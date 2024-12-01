// src/App.tsx
import React from "react";
import RepoList from "./RepoList";
import ParticleCanvas from "./ParticleCanvas";

const App: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <ParticleCanvas />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 mt-8">Welcome to my GitHub page</h1>
        <RepoList />
      </div>
    </div>
  );
};

export default App;
