import { useEffect, useState } from "react";
import Wave from "../../public/lottie/Wave.json";
import Lottie, { Options } from "react-lottie";

export default function Waves() {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: Wave,
    rendererSettings: {
      preserveAspectRatio: "none",
    },
  };
  return (
    <>
      <div className="w-screen h-40 z-10 bg-teal-400" />
      <div className="-mt-1 xl:-mt-10 relative">
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled={true}
          speed={0.5}
        />
      </div>
    </>
  );
}
