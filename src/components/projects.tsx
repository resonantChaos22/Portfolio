import workData from "@/workdata";
import { RoughNotation } from "react-rough-notation";
import { animated, SpringValue, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Work } from "./work";

interface fadeProps {
  opacity: SpringValue<number>;
}

interface ProjectsProps {
  // visible: boolean;
  work: number;
  fadeStyle: fadeProps;
}

export default function Projects({
  // visible,
  work,
  fadeStyle,
}: ProjectsProps) {
  // const [visible, setVisible] = useState(false);
  const { ref, inView: visible, entry } = useInView();

  return (
    <div className="lg:w-[50vw] h-[95vh] s:h-[115vh]" ref={ref}>
      <div className="relative text-teal-400 font-bold  pt-2 pb-4 2xl:text-9xl text-[5.5rem] xs:text-7xl">
        <RoughNotation type="underline" show={visible} padding={-15}>
          Past Work
        </RoughNotation>
      </div>
      {/* <div className="flex flex-row w-['50%']">
        <div className="p-2 border border-teal-400 text-center mr-2 w-24">
          Pause
        </div>
        <div>More Projects</div>
      </div> */}
      <div className="sb">
        <animated.div
          className="overflow-y-scroll overflow-x-hidden h-[70vh] bg-gray-800"
          style={{ ...fadeStyle }}
          // style={{ scrollSnapType: "y mandatory !important" }}
        >
          <Work workData={workData[work]} />
        </animated.div>
      </div>
    </div>
  );
}
function useEffect(arg0: () => void, arg1: (boolean | undefined)[]) {
  throw new Error("Function not implemented.");
}
