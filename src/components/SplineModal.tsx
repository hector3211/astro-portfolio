import type { Application } from "@splinetool/runtime";
import React, { useEffect, useRef, useState } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"))

function Spinner() {
    return (
        <div className="absolute top-1/2 left-1/2 w-10 h-10 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    );
}

export default function Rocket() {
    let modal = useRef<Application | undefined>();
    const [loading, setLoading] = useState(true);
    // const [currentBg, setCurrentBg] = useState<string>("");

    useEffect(() => {
        // if (localStorage.getItem("theme") === "light") {
        //     setCurrentBg("#FFFFFF");
        // } else {
        //     setCurrentBg("#2A303C");
        // }
        const loadTimer = setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => clearTimeout(loadTimer);
    }, [])
    function onLoad(splineApp: Application) {
        modal.current = splineApp;
        // save the app in a ref for later use
        // splineApp.setZoom(1);
        // splineApp.setBackgroundColor("white")
    }

    return (
        <div className="relative h-80 py-5 px-2 md:h-96 md:px-0">
            {loading ? (
                <Spinner />
            ) : (
                <Spline
                    style={{ borderRadius: 10 }}
                    scene="https://prod.spline.design/jNzC38qWlP4eDXCX/scene.splinecode"
                    onLoad={onLoad}
                />
            )}
        </div>
    );
}
