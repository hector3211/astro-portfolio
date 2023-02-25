import { useEffect, useState } from "react";

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
        className={`text-lg text-gray-50 ${
          current === "light"
            ? "btn btn-primary"
            : "btn bg-orange-500 hover:bg-orange-600"
        }`}
        data-toggle-theme="dark,light"
        data-act-class="ACTIVECLASS"
        onClick={changeTheme}
      >
        {current === "light" ? <p>Dark</p> : <p>Light</p>}
      </button>
    </div>
  );
}
