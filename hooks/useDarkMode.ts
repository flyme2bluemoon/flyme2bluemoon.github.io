import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") : "system"
  );

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (
          localStorage.getItem("theme") === null ||
          localStorage.getItem("theme") === "system"
        ) {
          if (e.matches) document.documentElement.classList.add("dark");
          else document.documentElement.classList.remove("dark");
        }
      });
  }, []);

  useEffect(() => {
    if (theme !== "dark" && theme !== "light" && theme !== "system") return;

    const root = document.documentElement;

    localStorage.removeItem("theme");

    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return setTheme;
};

export default useDarkMode;
