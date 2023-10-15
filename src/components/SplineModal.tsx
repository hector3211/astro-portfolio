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
    <Suspense fallback={<Spinner />}>
      <div className="h-60 px-2 md:h-80 md:px-0">
        <Spline
          style={{ borderRadius: 10, boxShadow: "0px 0px 20px 2px black" }}
          scene="https://prod.spline.design/kAJ4mFZRWfP2LZuM/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
    </Suspense>
  );
}
