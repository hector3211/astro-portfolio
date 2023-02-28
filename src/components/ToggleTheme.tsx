import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs/index.js";

export default function Toggle() {
  const [current, setCurrent] = useState<string>("");

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
        {current === "light" ? <BsMoonFill /> : <BsSunFill />}
      </button>
    </div>
  );
}
