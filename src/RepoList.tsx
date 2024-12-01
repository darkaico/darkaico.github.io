// src/RepoList.tsx
import React, { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description?: string;
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-bold text-green-400">{repo.name}</h2>
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
  );
};

export default RepoList;
