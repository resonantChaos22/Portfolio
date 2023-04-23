import { useEffect, useRef, useState } from "react";
import KUTE from "kute.js";

export default function Waves() {
  useEffect(() => {
    const tween1 = KUTE.fromTo(
      "#p11",
      { path: "#p11" },
      { path: "#p21" },
      { repeat: 999, duration: 4500, yoyo: true }
    );
    const tween2 = KUTE.fromTo(
      "#p12",
      { path: "#p12" },
      { path: "#p22" },
      { repeat: 999, duration: 4500, yoyo: true }
    );
    const tween3 = KUTE.fromTo(
      "#p13",
      { path: "#p13" },
      { path: "#p23" },
      { repeat: 999, duration: 4500, yoyo: true }
    );

    tween1.start();
    tween2.start();
    tween3.start();
  }, []);

  return (
    <>
      <div className="w-screen h-52 z-10 bg-teal-400" />
      <div className="z-20">
        <svg
          className="-m-4 -mx-20 md:-m-22 relative"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 720 120"
          preserveAspectRatio="none"
        >
          <g>
            <path
              id="p11"
              d="M0 88L20 90.5C40 93 80 98 120 92.3C160 86.7 200 70.3 240 60.8C280 51.3 320 48.7 360 50.3C400 52 440 58 480 66.2C520 74.3 560 84.7 600 79.3C640 74 680 53 720 46.8C760 40.7 800 49.3 840 60.7C880 72 920 86 940 93L960 100L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z"
              fill="#2dd4bf"
              opacity={"0.25"}
            ></path>
            <path
              id="p12"
              d="M0 77L20 73.8C40 70.7 80 64.3 120 63.2C160 62 200 66 240 68.7C280 71.3 320 72.7 360 63.7C400 54.7 440 35.3 480 32.7C520 30 560 44 600 44.3C640 44.7 680 31.3 720 29.2C760 27 800 36 840 37.2C880 38.3 920 31.7 940 28.3L960 25L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z"
              fill="#2dd4bf"
              opacity={"0.5"}
            ></path>
            <path
              id="p13"
              d="M0 2L20 7.5C40 13 80 24 120 27.3C160 30.7 200 26.3 240 24.3C280 22.3 320 22.7 360 21.8C400 21 440 19 480 15.7C520 12.3 560 7.7 600 9C640 10.3 680 17.7 720 23.7C760 29.7 800 34.3 840 36C880 37.7 920 36.3 940 35.7L960 35L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z"
              fill="#2dd4bf"
            ></path>
          </g>

          <g visibility={"hidden"}>
            <path
              id="p21"
              d="M0 82L20 81.7C40 81.3 80 80.7 120 79C160 77.3 200 74.7 240 71.2C280 67.7 320 63.3 360 67.3C400 71.3 440 83.7 480 83C520 82.3 560 68.7 600 68.3C640 68 680 81 720 79.3C760 77.7 800 61.3 840 57.5C880 53.7 920 62.3 940 66.7L960 71L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z"
              fill="#2dd4bf"
              opacity={"0.25"}
            ></path>
            <path
              id="p22"
              d="M0 30L20 28.7C40 27.3 80 24.7 120 30.2C160 35.7 200 49.3 240 49.8C280 50.3 320 37.7 360 39.8C400 42 440 59 480 67.5C520 76 560 76 600 69.5C640 63 680 50 720 43.7C760 37.3 800 37.7 840 34.3C880 31 920 24 940 20.5L960 17L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z"
              fill="#2dd4bf"
              opacity={"0.5"}
            ></path>
            <path
              id="p23"
              d="M0 49L20 44.5C40 40 80 31 120 31C160 31 200 40 240 40C280 40 320 31 360 27.2C400 23.3 440 24.7 480 21.7C520 18.7 560 11.3 600 14.3C640 17.3 680 30.7 720 37.2C760 43.7 800 43.3 840 39.7C880 36 920 29 940 25.5L960 22L960 0L940 0C920 0 880 0 840 0C800 0 760 0 720 0C680 0 640 0 600 0C560 0 520 0 480 0C440 0 400 0 360 0C320 0 280 0 240 0C200 0 160 0 120 0C80 0 40 0 20 0L0 0Z"
              fill="#2dd4bf"
            ></path>
          </g>
        </svg>
      </div>
    </>
  );
}