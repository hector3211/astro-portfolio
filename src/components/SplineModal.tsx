import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { Suspense } from "react";
export default function Rocket() {
  function onLoad(splineApp: Application) {
    // save the app in a ref for later use
    splineApp.setZoom(1);
  }

  return (
    <div className="h-60 px-2 md:h-80 md:px-0">
      <Suspense fallback={<p>Loadding...</p>}>
        <Spline
          style={{ borderRadius: 10, boxShadow: "0px 0px 20px 1px black" }}
          scene="https://prod.spline.design/kAJ4mFZRWfP2LZuM/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  );
}
