import type { Application } from "@splinetool/runtime";
import React, { useEffect, useRef, useState } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Spinner() {
  return (
    <div className="absolute top-1/2 left-[45%] sm:left-1/2 w-10 h-10 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
  );
}

export default function Rocket() {
  let modal = useRef<Application | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(loadTimer);
  }, []);
  function onLoad(splineApp: Application) {
    modal.current = splineApp;
    // splineApp.setZoom(1);
    // splineApp.setBackgroundColor("black");
  }

  return (
    <div className="relative w-full h-80 py-5 md:h-96 md:px-0">
      {loading ? (
        <Spinner />
      ) : (
        <Spline
          style={{ borderRadius: "4px", width: "100%" }}
          scene="https://prod.spline.design/jNzC38qWlP4eDXCX/scene.splinecode"
          onLoad={onLoad}
        />
      )}
    </div>
  );
}
