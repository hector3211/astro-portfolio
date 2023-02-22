import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { Suspense } from "react";
export default function Rocket() {
  function onLoad(splineApp: Application) {
    // save the app in a ref for later use
    splineApp.setZoom(1.9);
  }
  return (
    <div className="h-full px-2 md:h-72 md:px-0">
      <Suspense fallback={<div>Loadding...</div>}>
        <Spline
          style={{ borderRadius: 10, boxShadow: "0px 0px 20px 1px black" }}
          scene="https://prod.spline.design/mfK65j4zF0rnj1tW/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  );
}
