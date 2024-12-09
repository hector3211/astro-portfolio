import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../components/ui/button.tsx";

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
    <div className="pr-2">
      <Button className={`text-lg `} onClick={changeTheme}>
        {current === "light" ? <Moon className="" /> : <Sun className="" />}
      </Button>
    </div>
  );
}
