
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  // Check for system preference or stored preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      if (storedTheme) {
        return storedTheme === "dark";
      } else {
        return prefersDark;
      }
    }
    return false;
  });

  // Initialize theme on load
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 transition-all duration-300"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-gray-200 hover:text-white" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all text-gray-700 hover:text-gray-900" />
      )}
      <span className="sr-only">{isDarkMode ? "Light mode" : "Dark mode"}</span>
    </Button>
  );
};

export default ThemeToggle;
