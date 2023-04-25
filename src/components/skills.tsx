import { Wrapper } from "@/components/wrapper";
import { useEffect, useRef, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { Box } from "./box";
import { useInView } from "react-intersection-observer";

interface skillProps {
  colors: Array<Array<string>>;
}

export default function Skills({ colors }: skillProps) {
  const { ref, inView: visible, entry } = useInView();

  const languages = ["JS", "C++", "Python", "TS"];
  const libs = ["Express", "React", "Sequelize", "PostgreSQL"];
  const others = ["Docker", "GCP", "Postman"];
  const future = ["Java", "Go"];
  const languageElems = languages.map((item, index) => (
    <Box key={index} order={index} toggle={visible} color={colors[0][index]}>
      {item}
    </Box>
  ));
  const libElems = libs.map((item, index) => (
    <Box key={index} order={index} toggle={visible} color={colors[1][index]}>
      {item}
    </Box>
  ));
  const otherElems = others.map((item, index) => (
    <Box key={index} order={index} toggle={visible} color={colors[2][index]}>
      {item}
    </Box>
  ));
  const futureElems = future.map((item, index) => (
    <Box key={index} order={index} toggle={visible} color={colors[3][index]}>
      {item}
    </Box>
  ));

  return (
    <div className="lg:w-[35vw] min-h-[95vh] xs:h-[115vh]" ref={ref}>
      <div className="relative text-teal-400 font-bold pt-2 2xl:pb-16 pb-10 2xl:text-9xl text-[5.5rem] xs:text-7xl">
        <RoughNotation type="underline" show={visible} padding={-10}>
          Skills
        </RoughNotation>
      </div>
      <div className="2xl:pb-8 pb-6 2xl:text-3xl text-2xl font-bold">
        Languages
      </div>
      <div className="relative text-lg xl:text-xl 2xl:text-2x grid-cols-3 grid xl:gap-6 gap-4">
        {languageElems}
      </div>
      <div className="2xl:py-8 py-6 2xl:text-3xl text-2xl font-bold leading-6">
        Libraries/Frameworks/Databases
      </div>
      <div className="relative text-lg xl:text-xl 2xl:text-2xl grid-cols-3 grid xl:gap-6 gap-4">
        {libElems}
      </div>
      <div className="2xl:py-8 py-6 2xl:text-3xl text-2xl font-bold">
        Other Softwares
      </div>
      <div className="relative text-lg xl:text-xl 2xl:text-2xl grid-cols-3 grid xl:gap-6 gap-4">
        {otherElems}
      </div>
      <div className="2xl:py-8 py-6 2xl:text-3xl text-2xl font-bold leading-6">
        Languages I would like to pursue
      </div>
      <div className="relative text-lg lg:text-2xl 2xl:text-2xl grid-cols-3 grid xl:gap-6 gap-4">
        {futureElems}
      </div>
    </div>
  );
}
