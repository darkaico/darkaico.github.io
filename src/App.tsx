// src/App.tsx
import React from "react";
import RepoList from "./RepoList";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8 mt-8">Welcome to my GitHub page</h1>
      <RepoList />
    </div>
  );
};

export default App;
