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
    <ul id="repo-list">
      {repos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>{" "}
          - {repo.description || "No description available."}
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
