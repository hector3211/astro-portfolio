import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { Suspense } from "react";

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
                    style={{}}
                    scene="https://prod.spline.design/kAJ4mFZRWfP2LZuM/scene.splinecode"
                    onLoad={onLoad}
                />
            </Suspense>
        </div>
    );
}
