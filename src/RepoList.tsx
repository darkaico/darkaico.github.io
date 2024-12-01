// src/RepoList.tsx
import React, { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  fork: boolean;
}

const RepoItem: React.FC<{ repo: Repo }> = ({ repo }) => (
  <div className="p-4 mb-4 bg-gray-800 rounded-lg shadow-md max-w-xs mx-auto flex flex-col">
    <h3 className="text-lg font-bold truncate">{repo.name}</h3>
    <p className="text-gray-300 text-sm mt-1">{repo.description || "No description available."}</p>
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline mt-2 block"
    >
      Visit Repository
    </a>
  </div>
);

const RepoList: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const username = "darkaico"; // Your GitHub username
      const url = `https://api.github.com/users/${username}/repos?sort=updated`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  // Separate repos into owned and forked
  const ownedRepos = repos.filter((repo) => !repo.fork);
  const forkedRepos = repos.filter((repo) => repo.fork);

  return (
    <div className="flex flex-col md:flex-row justify-center repo-container w-full">
      <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-green-400 mb-4 p-4 text-center">My Repositories</h2>
        {ownedRepos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
      <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-green-400 mb-4 p-4 text-center">
          Forked Repositories
        </h2>
        {forkedRepos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
