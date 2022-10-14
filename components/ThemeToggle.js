import React from "react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState("dark");
  const inactiveTheme = activeTheme === "dark" ? "light" : "dark";
  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);
  return (
    <div>
      <button type="button" onClick={() => setActiveTheme(inactiveTheme)}>
        toggle
      </button>
    </div>
  );
}
