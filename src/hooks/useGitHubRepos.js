// hooks/useGitHub.js
import { useState, useEffect } from "react";

export const useGitHubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loadding, setLoadding] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=6`,
    )
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoadding(false);
      });
  }, [username]);

  return { repos, loadding };
};
