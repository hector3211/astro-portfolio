import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Toggle() {
  const [current, setCurrent] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setCurrent("dark");
    } else {
      setCurrent("light");
    }
  }, []);

  function changeTheme() {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (localStorage.getItem("theme") === "dark") {
      setCurrent("dark");
    } else {
      setCurrent("light");
    }
  }
  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-muted/30 text-muted-foreground transition duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      onClick={changeTheme}
      aria-label="Toggle theme"
    >
      {current === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
