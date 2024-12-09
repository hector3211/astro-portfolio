import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, MenuSquare } from "lucide-react";

export default function Menu() {
  const [show, setShow] = useState<true | false>(true);
  const [current, setCurrent] = useState<string>("");

  useEffect(() => {
    setShow(false);
    if (localStorage.getItem("theme") === "dark") {
      setCurrent("dark");
    } else {
      setCurrent("light");
    }
  }, []);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="relative z-50 md:hidden">
      <Button onClick={handleShow}>
        <MenuSquare />
      </Button>
      {show && (
        <div
          className={`${
            current === "light"
              ? "bg-zinc-950 text-white"
              : "bg-white text-gray-800"
          } absolute right-0 top-14 w-32 rounded-md border border-black text-lg`}
        >
          <ul className="flex flex-col items-start justify-center space-y-3">
            <li className="w-full rounded-t-lg px-2 py-1">
              <a className="w-full" href="/" onClick={handleShow}>
                Home
              </a>
            </li>
            <li className="hover:bg-base-300 active:bg-base-300 w-full px-2 py-1">
              <a
                className="w-full"
                href="https://github.com/hector3211"
                target="_blank"
                onClick={handleShow}
              >
                Github
              </a>
            </li>
            <li className="hover:bg-base-300 active:bg-base-300 w-full rounded-b-lg px-2 py-1">
              <a
                className="flex w-full  items-center"
                href="https://github.com/hector3211/astro-portfolio"
                target="_blank"
                onClick={handleShow}
              >
                <p>Source</p>
                <ExternalLink className="pt-1" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
