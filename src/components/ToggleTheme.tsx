import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs/index.js";
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
    if (localStorage.getItem("theme") === "dark") {
      setCurrent("dark");
    } else {
      setCurrent("light");
    }
  }

  return (
    <div className="pr-1">
      <Button className={`text-lg text-gray-300`} onClick={changeTheme}>
        {current === "light" ? (
          <BsMoonFill className="" />
        ) : (
          <BsSunFill className="" />
        )}
      </Button>
    </div>
  );
}
