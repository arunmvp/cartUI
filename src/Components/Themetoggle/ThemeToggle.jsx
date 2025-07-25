import React from "react";
import { Moon, Sun } from "lucide-react"; // Optional icons, or use any icons you like
import "./ThemeToggle.css";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </div>
  );
};

export default ThemeToggle;
