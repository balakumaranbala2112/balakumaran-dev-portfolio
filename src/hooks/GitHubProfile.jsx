// src/pages/Projects.jsx

import { useGitHubProfile } from "../hooks/useGitHubProfile"; // ✅ import hook

// ✅ Define or import the component
const GitHubProfile = ({ username }) => {
  const profile = useGitHubProfile(username);
  if (!profile) return null;

  return (
    <div className="github-profile-card">
      <img src={profile.avatar_url} alt="avatar" width={80} />
      <div>
        <h3>{profile.name}</h3>
        <p>{profile.bio}</p>
        <div className="github-stats">
          <span>📦 {profile.public_repos} Repos</span>
          <span>👥 {profile.followers} Followers</span>
          <span>➡️ {profile.following} Following</span>
        </div>
      </div>
    </div>
  );
};
