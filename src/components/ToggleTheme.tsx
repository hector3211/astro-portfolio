import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs/index.js";

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
            <button
                className={`text-lg text-gray-300 ${current === "light"
                    ? "btn btn-primary"
                    : "btn bg-orange-500 hover:bg-orange-600"
                    }`}
                data-toggle-theme="dark,light"
                data-act-class="ACTIVECLASS"
                onClick={changeTheme}
            >
                {current === "light" ? <BsMoonFill className="" /> : <BsSunFill className="" />}
            </button>
        </div>
    );
}
