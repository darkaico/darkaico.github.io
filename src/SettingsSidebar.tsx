import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface SettingsSidebarProps {
  isActive: boolean;
  toggleParticles: () => void;
  isOpen: boolean;
  colorPalette: string;
  setColorPalette: (palette: string) => void;
}

const colorOptions = ["matrix", "marvel"];

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  isActive,
  toggleParticles,
  isOpen,
  colorPalette,
  setColorPalette,
}) => {
  return (
    <div
      className={`absolute top-2 right-0 w-36 bg-gray-200 rounded-md p-2 shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "-translate-x-2" : "translate-x-full"
      }`}
    >
      <h3 className="text-gray-800 text-sm font-semibold mb-2">Settings</h3>
      <button
        onClick={toggleParticles}
        className="bg-transparent border-none cursor-pointer flex items-center text-blue-500"
      >
        {isActive ? <FaPause /> : <FaPlay />}
        <span className="ml-2">{isActive ? "Stop Particles" : "Start Particles"}</span>
      </button>
      <div className="mt-2">
        <label className="block text-gray-700 text-sm mb-1">Particles Color:</label>
        <select
          value={colorPalette}
          onChange={(e) => setColorPalette(e.target.value)}
          className="border rounded p-1 bg-white text-gray-800"
        >
          {colorOptions.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SettingsSidebar;
