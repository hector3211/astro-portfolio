import type { Application } from "@splinetool/runtime";
import React from "react";
import { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"))

function Spinner() {
    return (
        <div className="w-5 h-5 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    );
}

export default function Rocket() {
    function onLoad(splineApp: Application) {
        // save the app in a ref for later use
        splineApp.setZoom(1);
    }

    return (
        <div className="h-80 py-5 px-2 md:h-96 md:px-0">
            <Suspense fallback={<Spinner />}>
                <Spline
                    style={{ borderRadius: 10 }}
                    scene="https://prod.spline.design/jNzC38qWlP4eDXCX/scene.splinecode"
                    onLoad={onLoad}
                />
            </Suspense>
        </div>
    );
}
