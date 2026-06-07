import type { Application } from "@splinetool/runtime";
import { useCallback, useRef, Suspense } from "react";
import Spline from "@splinetool/react-spline";

export default function Model() {
  let modal = useRef<Application | undefined>();
  const onLoad = useCallback((splineApp: Application) => {
    modal.current = splineApp;
    splineApp.setZoom(1.1);
    // splineApp.setBackgroundColor("black");
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-teal-500 border-t-transparent"></div>
          </div>
        }
      >
        <Spline
          renderOnDemand={false}
          className="h-full w-full"
          style={{ borderRadius: "2rem", width: "100%", height: "100%" }}
          scene="https://prod.spline.design/jNzC38qWlP4eDXCX/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  );
}
