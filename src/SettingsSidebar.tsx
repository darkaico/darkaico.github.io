import React from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Importing icons

interface SettingsSidebarProps {
  isActive: boolean; // Accept isActive as a prop
  toggleParticles: () => void; // Accept toggleParticles as a prop
}

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ isActive, toggleParticles }) => {
  return (
    <div
      className="absolute top-5 right-5 w-36 bg-gray-200 rounded-md p-2 shadow-lg z-50" // Tailwind CSS classes
    >
      <h3 className="text-gray-800 text-sm font-semibold mb-2">Settings</h3>
      <button
        onClick={toggleParticles}
        className="bg-transparent border-none cursor-pointer flex items-center text-blue-500"
      >
        {isActive ? <FaPause /> : <FaPlay />} {/* Use icons for on/off */}
        <span className="ml-2">{isActive ? "Stop Particles" : "Start Particles"}</span>
      </button>
      {/* Additional toggle buttons for other settings can be added here */}
    </div>
  );
};

export default SettingsSidebar;
