import Spline from "@splinetool/react-spline";
import { useRef } from "react";
export default function Rocket() {
  const spline = useRef();

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
    spline.current.setZoom(1.8);
  }
  return (
    <div className="h-full px-2 md:h-72 md:px-0">
      <Spline
        style={{ borderRadius: 10, boxShadow: "0px 0px 20px 1px black" }}
        scene="https://prod.spline.design/mfK65j4zF0rnj1tW/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
