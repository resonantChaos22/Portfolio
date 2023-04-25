import { useEffect, useRef, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Underline } from "@/components/underline";
import downArrow from "../../public/lottie/DownArrow.json";
import Lottie, { Options } from "react-lottie";
import { useInView } from "react-intersection-observer";

export default function Introduction() {
  const [notation, setNotation] = useState(false);
  useEffect(() => {
    setTimeout(() => setNotation(true), 1000);
  }, []);

  const { ref, inView: visible, entry } = useInView();

  return (
    <>
      <div
        className="relative mt-20 font-tiltwarp text-gray-600 w-screen flex-row center px-10 lg:px-40 text-center md:text-xl sm:text-lg lg:text-2xl 2xl:text:3xl pb-32"
        onMouseEnter={() => setNotation(true)}
        ref={ref}
      >
        <div>
          <RoughNotationGroup show={notation && visible}>
            Hi there, I am{" "}
            <div className="inline font-bold text-black">
              <RoughNotation
                type="highlight"
                color="#2DD4BF"
                animationDuration={300}
                strokeWidth={1}
                order="1"
              >
                Shreyash
              </RoughNotation>
            </div>
            . I am a <Underline order="2">full-stack developer</Underline> and
            like to write clean, concise and optimal code while prioritizing
            both design and function equally. <br />I love learning and
            implementing new technologies. So, apart from web development, I
            have tried{" "}
            <Underline order="3">
              mobile development and cloud deployment
            </Underline>{" "}
            as well. I aspire to apply practical concurrency techniques in the
            personal projects I undertake.{" "}
            <Underline order="4">Neuroscience</Underline> is currently a
            secondary area of interest for me as well.
          </RoughNotationGroup>
        </div>
      </div>
      {/* <div className="mt-28 2xl:mt-30 xl:mt-16 lg:mt-16 flex justify-center bg-gradient-to-b top-[100vh]"></div> */}
    </>
  );
}
