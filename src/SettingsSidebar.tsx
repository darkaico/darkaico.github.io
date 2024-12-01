import React from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Importing icons

interface SettingsSidebarProps {
  isActive: boolean; // Accept isActive as a prop
  toggleParticles: () => void; // Accept toggleParticles as a prop
}

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ isActive, toggleParticles }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        width: "150px",
        background: "#f0f0f0", // Light gray background
        borderRadius: "5px",
        padding: "10px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000, // Ensure it is on top of everything
      }}
    >
      <h3 style={{ color: "#333", margin: "0 0 10px 0" }}>Settings</h3>
      <button
        onClick={toggleParticles}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          color: "#007BFF", // Button text color
        }}
      >
        {isActive ? <FaPause /> : <FaPlay />} {/* Use icons for on/off */}
        <span style={{ marginLeft: "5px" }}>{isActive ? "Stop Particles" : "Start Particles"}</span>
      </button>
      {/* Additional toggle buttons for other settings can be added here */}
    </div>
  );
};

export default SettingsSidebar;
