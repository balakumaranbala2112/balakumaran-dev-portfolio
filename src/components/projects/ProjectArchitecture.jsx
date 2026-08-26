import React from "react";
import { FaLayerGroup, FaServer, FaDatabase, FaShieldHalved, FaCloudArrowUp } from "react-icons/fa6";
import "@/styles/components/projects/ProjectArchitecture.css";

export default function ProjectArchitecture({ architecture, frontend, backend, database, authentication, deployment }) {
  if (!architecture && !backend && !frontend && !database && !authentication && !deployment) return null;

  const archData = architecture || {};

  return (
    <div className="project-arch">
      {archData.summary && (
        <p className="project-arch__summary">{archData.summary}</p>
      )}

      <div className="project-arch__grid">
        {/* Frontend Layer */}
        {(frontend || archData.frontend) && (
          <div className="project-arch__card">
            <div className="project-arch__card-header">
              <div className="project-arch__icon-wrap">
                <FaLayerGroup />
              </div>
              <h4 className="project-arch__card-title">Frontend Tier</h4>
            </div>
            <p className="project-arch__card-desc">{frontend || archData.frontend}</p>
          </div>
        )}

        {/* Backend Tier */}
        {(backend || archData.backend) && (
          <div className="project-arch__card">
            <div className="project-arch__card-header">
              <div className="project-arch__icon-wrap">
                <FaServer />
              </div>
              <h4 className="project-arch__card-title">Backend REST & WebSockets</h4>
            </div>
            <p className="project-arch__card-desc">{backend || archData.backend}</p>
          </div>
        )}

        {/* Database Layer */}
        {(database || archData.database) && (
          <div className="project-arch__card">
            <div className="project-arch__card-header">
              <div className="project-arch__icon-wrap">
                <FaDatabase />
              </div>
              <h4 className="project-arch__card-title">Database & Persistence</h4>
            </div>
            <p className="project-arch__card-desc">{database || archData.database}</p>
          </div>
        )}

        {/* Security & Auth */}
        {(authentication || archData.authentication) && (
          <div className="project-arch__card">
            <div className="project-arch__card-header">
              <div className="project-arch__icon-wrap">
                <FaShieldHalved />
              </div>
              <h4 className="project-arch__card-title">Authentication & Guards</h4>
            </div>
            <p className="project-arch__card-desc">{authentication || archData.authentication}</p>
          </div>
        )}

        {/* Deployment */}
        {(deployment || archData.deployment) && (
          <div className="project-arch__card">
            <div className="project-arch__card-header">
              <div className="project-arch__icon-wrap">
                <FaCloudArrowUp />
              </div>
              <h4 className="project-arch__card-title">Deployment & Infrastructure</h4>
            </div>
            <p className="project-arch__card-desc">{deployment || archData.deployment}</p>
          </div>
        )}
      </div>
    </div>
  );
}
