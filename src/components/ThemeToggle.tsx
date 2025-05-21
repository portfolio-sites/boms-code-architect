
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 transition-all duration-300"
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-gray-200 hover:text-white" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all text-gray-700 hover:text-gray-900" />
      )}
      <span className="sr-only">{resolvedTheme === "dark" ? "Light mode" : "Dark mode"}</span>
    </Button>
  );
};

export default ThemeToggle;
