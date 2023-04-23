import Lottie, { Options } from "react-lottie";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
export default function Preload() {
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFade(true);
    }, 1500);
    setTimeout(() => {
      setLoading(true);
    }, 10000);
  }, []);

  const fadeStyle = useSpring({
    from: { opacity: 1 },
    to: { opacity: fade ? 0 : 1 },
    config: { duration: 200 },
  });

  return (
    <animated.div
      style={{ zIndex: "1000 !important", ...fadeStyle }}
      className="fixed flex justify-center flex-col center top-0 left-0 h-screen w-screen overflow-hidden bg-gray-800"
    >
      <div className="relative mx-auto w-80 h-80 center">
        <Image src="/hourglass.gif" alt="chill" fill />
      </div>
      <div className="mx-auto mt-40 text-gray-300 text-xl md:text-2xl lg:text-4xl">
        Light Theme Ahead, Prepare Your Eyes!
      </div>
      {loading ? (
        <div className="text-gray-400 mx-auto text-xs md:text-base mt-6">
          It might take some more time. Thank you for waiting.
        </div>
      ) : (
        <></>
      )}
    </animated.div>
  );
}
