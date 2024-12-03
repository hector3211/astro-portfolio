import type { Application } from "@splinetool/runtime";
import { useCallback, useRef, Suspense } from "react";
import Spline from "@splinetool/react-spline";

export default function Model() {
  let modal = useRef<Application | undefined>();
  const onLoad = useCallback((splineApp: Application) => {
    modal.current = splineApp;
    // splineApp.setZoom(1);
    // splineApp.setBackgroundColor("black");
  }, []);

  return (
    <div className="relative h-80 w-full py-5 md:h-96 md:px-0">
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          </div>
        }
      >
        <Spline
          style={{ borderRadius: "4px", width: "100%" }}
          scene="https://prod.spline.design/jNzC38qWlP4eDXCX/scene.splinecode"
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  );
}
