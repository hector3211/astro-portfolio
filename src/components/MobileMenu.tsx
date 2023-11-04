import { useEffect, useState } from "react";
import { TbMenu2 } from "react-icons/tb/index.js";
import { BiLinkExternal } from "react-icons/bi/index.js";
import { Button } from "./ui/button";

export default function Menu() {
  const [show, setShow] = useState<true | false>(true);

  useEffect(() => {
    setShow(false);
  }, []);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="relative z-50 md:hidden">
      <Button onClick={handleShow}>
        <TbMenu2 className="text-lg" />
      </Button>
      {show && (
        <div
          className={`absolute border border-black top-14 right-0 w-32 bg-zinc-900 backdrop-blur-lg rounded-md text-lg drop-shadow-2xl`}
        >
          <ul className="flex flex-col space-y-3 justify-center items-start">
            <li className="w-full py-1 px-2 rounded-t-lg">
              <a className="w-full" href="/" onClick={handleShow}>
                Home
              </a>
            </li>
            <li className="w-full py-1 px-2 hover:bg-base-300 active:bg-base-300">
              <a
                className="w-full"
                href="https://github.com/hector3211"
                target="_blank"
                onClick={handleShow}
              >
                Github
              </a>
            </li>
            <li className="w-full py-1 px-2 rounded-b-lg hover:bg-base-300 active:bg-base-300">
              <a
                className="w-full flex  items-center"
                href="https://github.com/hector3211/astro-portfolio"
                target="_blank"
                onClick={handleShow}
              >
                <p>Source</p>
                <BiLinkExternal className="pt-1" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
