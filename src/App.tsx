// src/App.tsx
import React from "react";
import RepoList from "./RepoList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My GitHub Page</h1>
      <p>Here are some of my repositories:</p>
      <RepoList />
    </div>
  );
};

export default App;
