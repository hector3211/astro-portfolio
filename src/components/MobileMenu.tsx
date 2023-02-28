import { useEffect, useState } from "react";
import { TbMenu2 } from "react-icons/tb";

export default function Menu() {
  const [show, setShow] = useState<true | false>(true);

  useEffect(() => {
    setShow(false);
  }, []);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="relative z-50 pr-1 md:hidden">
      <button className="btn btn-primary" onClick={handleShow}>
        <TbMenu2 className="text-xl" />
      </button>
      {show && (
        <div
          className={`absolute border border-gray-300 top-14 right-1 w-32 bg-base-100 bg-opacity-90 backdrop-blur-lg rounded-md text-xl drop-shadow-2xl`}
        >
          <ul className="flex flex-col justify-center items-center p-2">
            <li>
              <a href="/">Home</a>
            </li>
            <div className="divider p-0 m-0 text-black"></div>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <div className="divider p-0 m-0 text-black"></div>
            <li>
              <a href="https://github.com/hector3211" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
