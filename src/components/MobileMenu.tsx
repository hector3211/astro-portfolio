import { useEffect, useState } from "react";
import { TbMenu2 } from "react-icons/tb/index.js";
import { BiLinkExternal } from "react-icons/bi/index.js"

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
            <button
                className="btn bg-gray-600 hover:bg-gray-700 active:bg-gray-700"
                onClick={handleShow}
            >
                <TbMenu2 className="text-lg" />
            </button>
            {show && (
                <div
                    className={`absolute border border-black top-14 right-1 w-32 bg-base-100 bg-opacity-90 backdrop-blur-lg rounded-md text-lg drop-shadow-2xl`}
                >
                    <ul className="flex flex-col space-y-3 justify-center items-start">
                        <li className="w-full p-0.5 rounded-t-lg hover:bg-base-300">
                            <a className="w-full" href="/" onClick={handleShow}>Home</a>
                        </li>
                        <li className="w-full p-0.5 hover:bg-base-300">
                            <a className="w-full" href="https://github.com/hector3211" target="_blank" onClick={handleShow}>
                                Github
                            </a>
                        </li>
                        <li className="w-full p-0.5 rounded-b-lg hover:bg-base-300">
                            <a className="w-full flex  items-center" href="https://github.com/hector3211/astro-portfolio" target="_blank" onClick={handleShow}>
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
