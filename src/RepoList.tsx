// src/RepoList.tsx
import React, { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  fork: boolean;
}

const RepoList: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const username = "darkaico"; // Your GitHub username
      const url = `https://api.github.com/users/${username}/repos`;
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
    <div className="flex justify-between">
      <div className="w-1/2 pr-4">
        <h2 className="text-2xl font-bold text-green-400 mb-4">My Repositories</h2>
        {ownedRepos.map((repo) => (
          <div key={repo.id} className="p-4 mb-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{repo.name}</h3>
            <p className="text-gray-300">{repo.description || "No description available."}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Visit Repository
            </a>
          </div>
        ))}
      </div>
      <div className="w-1/2 pl-4">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Forked Repositories</h2>
        {forkedRepos.map((repo) => (
          <div key={repo.id} className="p-4 mb-4 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{repo.name}</h3>
            <p className="text-gray-300">{repo.description || "No description available."}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Visit Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
