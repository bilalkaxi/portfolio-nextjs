"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={toggleTheme}
    >
      <span aria-hidden="true">{isLight ? "🌙" : "☀️"}</span>
      <span>{isLight ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}
