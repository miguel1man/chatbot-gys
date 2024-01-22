import { useEffect, useState } from "react";
import SunIcon from "./assets/SunIcon";
import MoonIcon from "./assets/MoonIcon";

const ThemeButton = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const getLocalValue = () => {
      const storedValue = localStorage.getItem("theme");
      if (storedValue !== null) {
        return storedValue;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    const initialTheme = getLocalValue();
    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (theme !== null) {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (theme === null) {
    return null;
  }

  return (
    <button onClick={handleToggle}>
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeButton;
