import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function Toggle() {
  const [themeToggle, setThemeToggle] = useState<true | false>(true);
  const [current, setCurrent] = useState<string>("");

  useEffect(() => {
    function toggle() {
      if (localStorage.getItem("theme") === "dark") {
        setThemeToggle(false);
      } else if (localStorage.getItem("theme") === "light") {
        setThemeToggle(true);
      }
    }
    toggle();
  }, [themeToggle]);

  function changeTheme() {
    if (localStorage.getItem("theme") === "dark") {
      setCurrent("dark");
    } else {
      setCurrent("light");
    }
  }

  return (
    <div>
      <button
        className="btn btn-accent text-xl"
        data-toggle-theme="dark,light"
        data-act-class="ACTIVECLASS"
        onClick={changeTheme}
      >
        {current === "light" ? <BsMoonFill /> : <BsSunFill />}
      </button>
    </div>
  );
}
