import { useEffect, useRef, useState } from "react";
import Waves from "@/components/waves";
import ProfileImage from "@/components/profileimage";
import Introduction from "@/components/introduction";
import Lottie, { Options } from "react-lottie";
import downArrow from "../../public/lottie/DownArrow.json";
import Skills from "./skills";
import { animated, useSpring } from "react-spring";
import workData from "../workdata";
import Projects from "./projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileAlt as faFile,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactNav from "./contactNav";
export default function HomeComp() {
  const [skillNotation, setSkillNotation] = useState(false);
  const [visible, setVisible] = useState(true);

  let fadeStyle = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 400 },
    onRest: () => {
      if (!visible) {
        setWork((work + 1) % workData.length);
        setVisible(true);
      }
    },
  });

  const [work, setWork] = useState(0);

  const nextWork = () => {
    setVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextWork();
      console.log(work);
    }, 4000);
    return () => clearTimeout(timer);
  });

  const skillRef = useRef<HTMLDivElement>(null);
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: downArrow,
    rendererSettings: {
      preserveAspectRatio: "none",
    },
  };

  return (
    <>
      <section className="h-[100vh] xs:h-[140vh]">
        <Waves />
        <ProfileImage />
        <Introduction />
        <ContactNav />
      </section>

      <div
        className="flex justify-center -mt-20"
        onClick={() => skillRef.current?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="relative h-20 min-w-20 bg-gray-800 px-12 pt-5 rounded-t-full">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            speed={0.5}
          />
        </div>
      </div>
      {/* <div className="w-screen h-20 bg-gray-800"></div> */}

      <section
        className="lg:h-[100vh] h-[200vh] xs:h-[240vh] flex flex-col lg:flex-row justify-between lg:justify-center w-full bg-gray-800 p-5 text-gray-300 xs:min-h-[140vh]"
        onMouseEnter={() => setSkillNotation(true)}
        ref={skillRef}
      >
        <Projects
          skillNotation={skillNotation}
          work={work}
          fadeStyle={fadeStyle}
        />
        <div className="w-0.5 lg:mx-[5vw] bg-gray-600 lg:my-[10vh] h-0 lg:h-[80vh]"></div>
        <hr className="lg:invisible" />
        <Skills skillNotation={skillNotation} colors={workData[work].colors} />
        <hr />
      </section>

      <div className="w-screen h-0.5 bg-gray-600"></div>

      {/* <section className="h-[100vh] xs:h-[140vh] bg-gray-800">
        <div className="p-10">
          <div className="mb-20">
            <div className="text-teal-400 text-3xl">email</div>
            <div className="text-gray-300 text-5xl font-bold">
              pshreyash2201@gmail.com
            </div>
          </div>
          <div className="mb-20">
            <div className="text-teal-400 text-3xl">github</div>
            <div className="text-gray-300 text-5xl font-bold">
              resonantChaos22
            </div>
          </div>
          <div className="mb-20">
            <div className="text-teal-400 text-3xl">linkedin</div>
            <div className="text-gray-300 text-5xl font-bold">shreyash2201</div>
          </div>
        </div>
      </section> */}
    </>
  );
}
